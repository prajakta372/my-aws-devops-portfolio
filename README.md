# Task Manager -- DevSecOps CI/CD & Kubernetes Monitoring

A production-style DevOps project that demonstrates containerization, CI/CD automation, Kubernetes deployment, infrastructure monitoring, and application observability using AWS, Docker, Jenkins, K3s, Prometheus, and Grafana.

---

## Project Overview

This project takes a Task Manager web application through an automated DevOps workflow:

**GitHub → Jenkins → Docker Build → Docker Hub → Kubernetes/K3s → Prometheus → Grafana**

The goal is to demonstrate practical DevOps skills including Linux administration, Docker, CI/CD, Kubernetes, cloud infrastructure, monitoring, troubleshooting, and secure credential handling.

---

## Architecture

```text
                         ┌─────────────────────┐
                         │       GitHub        │
                         │  Source Repository  │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │       Jenkins       │
                         │     CI/CD Server    │
                         └──────────┬──────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
                    ▼                               ▼
          ┌─────────────────┐             ┌─────────────────┐
          │ Build Docker    │             │ Push Images to  │
          │ Backend/Frontend│             │    Docker Hub   │
          └────────┬────────┘             └────────┬────────┘
                   └──────────────┬────────────────┘
                                  │ SSH
                                  ▼
                       ┌─────────────────────┐
                       │     AWS EC2         │
                       │      K3s Cluster    │
                       └──────────┬──────────┘
                                  │
                 ┌────────────────┼────────────────┐
                 ▼                ▼                ▼
          ┌────────────┐   ┌────────────┐   ┌────────────┐
          │  Backend   │   │  Frontend  │   │ PostgreSQL │
          │    Pod     │   │    Pod     │   │    Pod     │
          └────────────┘   └────────────┘   └────────────┘
                                  │
                                  ▼
                           ┌────────────┐
                           │  Traefik   │
                           │  Ingress   │
                           └────────────┘

             Monitoring / Observability
                         │
          ┌──────────────┴──────────────┐
          ▼                             ▼
   ┌──────────────┐              ┌──────────────┐
   │  Prometheus  │─────────────▶│   Grafana    │
   │ Metrics      │              │ Dashboards   │
   └──────────────┘              └──────────────┘
```

---

## Technology Stack

| Area | Technologies |
| :--- | :--- |
| **Cloud** | AWS EC2, AWS S3, AWS IAM |
| **OS** | Ubuntu Linux |
| **Source Control** | Git, GitHub |
| **CI/CD** | Jenkins |
| **Containers** | Docker |
| **Container Registry** | Docker Hub |
| **Orchestration** | Kubernetes / K3s |
| **Ingress** | NGINX / Traefik Ingress |
| **Monitoring** | Prometheus |
| **Visualization** | Grafana |
| **Metrics** | Node Exporter, kube-state-metrics, Kubelet/cAdvisor |
| **Backend** | Node.js / Express |
| **Frontend** | HTML, CSS, JavaScript / React |
| **Database** | PostgreSQL |
| **Automation** | Bash / Declarative Jenkins Pipeline |
| **Security** | Jenkins Credentials, SSH keys, Kubernetes Secrets |

---

## AWS Infrastructure & Compute Provisioning

Provisioned Ubuntu Linux compute instance on AWS EC2, configured Security Groups for remote SSH access, application traffic, and monitoring ports, and verified shell connectivity.

### Implementation Screenshots:

| AWS EC2 Instance Management | Ubuntu SSH Connection |
| :---: | :---: |
| ![AWS EC2 Instance](./screenshots/01-aws-ec2-instance.png) | ![Ubuntu SSH](./screenshots/02-ubuntu-ssh.png) |

| Docker Environment & Status |
| :---: |
| ![Docker Status](./screenshots/03-docker.png) |

---

## CI/CD Pipeline

The Jenkins pipeline contains the following stages:

1. **Checkout SCM** -- retrieves source code from GitHub.
2. **Checkout** -- prepares the workspace.
3. **Build Backend Image** -- builds the backend Docker image.
4. **Build Frontend Image** -- builds the frontend Docker image.
5. **Push Backend Image** -- securely authenticates with Docker Hub and pushes the backend image.
6. **Push Frontend Image** -- securely authenticates with Docker Hub and pushes the frontend image.
7. **Deploy to Kubernetes** -- connects to the K3s server over SSH and applies the Kubernetes manifests.
8. **Verify Deployment** -- verifies backend and frontend rollouts and checks pod status.
9. **Post Actions** -- reports pipeline success or failure.

### Jenkinsfile Highlights

Docker Hub credentials are handled through Jenkins Credentials rather than hard-coded passwords:

```groovy
withCredentials([usernamePassword(
    credentialsId: 'dockerhub-credentials',
    usernameVariable: 'DOCKER_USERNAME',
    passwordVariable: 'DOCKER_PASSWORD'
)]) {
    // Docker login and push
}
```

Kubernetes deployment is performed remotely:

```bash
ssh -i /var/lib/jenkins/.ssh/taskmanager_key \
    ubuntu@<KUBERNETES_SERVER_PRIVATE_IP> \
    "sudo kubectl apply -f /home/ubuntu/Task-Manager-DevSecOps/k8s/"
```

Deployment verification includes:

```bash
kubectl rollout status deployment/backend -n taskmanager
kubectl rollout status deployment/frontend -n taskmanager
kubectl get pods -n taskmanager
```

### CI/CD Implementation Screenshots:

| Jenkins Server SSH Host Access | Jenkins Server Dashboard |
| :---: | :---: |
| ![Jenkins SSH](./screenshots/13-jenkins-server-ssh.png) | ![Jenkins Server](./screenshots/13.1-jenkins-server.png) |

| Jenkins Global Tool Configuration |
| :---: |
| ![Jenkins Tools](./screenshots/13.2-jenkins-server-tools.png) |

| Declarative Jenkinsfile (Part 1 - Stages & Setup) | Declarative Jenkinsfile (Part 2 - Docker & K8s Push) |
| :---: | :---: |
| ![Jenkinsfile Part 1](./screenshots/13.3-jenkinsfile-part1.png) | ![Jenkinsfile Part 2](./screenshots/13.3-jenkinsfile-part2.png) |

| Jenkins Pipeline Successful Execution | Jenkins Pipeline Stage View |
| :---: | :---: |
| ![Jenkins Pipeline Success](./screenshots/13.4-jenkins-pipeline-success.png) | ![Jenkins Stage View](./screenshots/13.5-jenkins-pipeline-stages.png) |

| Jenkins Console Logs (Build Phase) | Jenkins Console Logs (Deploy Phase) |
| :---: | :---: |
| ![Console Output 1](./screenshots/13.6-console-output.png) | ![Console Output 2](./screenshots/13.7-console-output-2.png) |

---

## Kubernetes Orchestration & Workload Deployment

The project uses a single-node K3s cluster on AWS EC2 for the application workload.

### Kubernetes Resources

- Namespace
- Backend Deployment
- Frontend Deployment
- PostgreSQL Deployment
- Backend Service
- Frontend Service
- PostgreSQL Service
- ConfigMap
- Secret
- PersistentVolumeClaim
- Ingress

Example verification commands:

```bash
sudo k3s kubectl get nodes
sudo k3s kubectl get deployments,pods -n taskmanager
sudo k3s kubectl get svc -n taskmanager
sudo k3s kubectl get ingress -n taskmanager
```

### Kubernetes Implementation Screenshots:

| K3s Cluster Engine Status | Kubernetes Node Health (`kubectl get nodes`) |
| :---: | :---: |
| ![K3s Running](./screenshots/04-k3s-running.png) | ![Kubernetes Node](./screenshots/05-kubernetes-node.png) |

| Kubernetes Manifest Files Overview | Namespace Specification (`namespace.yaml`) |
| :---: | :---: |
| ![Manifests](./screenshots/05.1-kubernetes-manifests.png) | ![Namespace Spec](./screenshots/05.2-namespace-yaml.png) |

| Backend Deployment Manifest (`backend-deployment.yaml`) | Frontend Deployment Manifest (`frontend-deployment.yaml`) |
| :---: | :---: |
| ![Backend Deployment](./screenshots/05.3-backend-deployment.yaml.png) | ![Frontend Deployment](./screenshots/05.4-frontend-deployment.yaml.png) |

| Kubernetes Ingress Config (`ingress.yaml`) | Kubernetes Services Overview (`kubectl get svc`) |
| :---: | :---: |
| ![Ingress](./screenshots/06-kubernetes-ingress.png) | ![Services](./screenshots/07-kubernetes-services.png) |

| Kubernetes Active Workloads & Pods (`kubectl get pods`) |
| :---: |
| ![Kubernetes Workloads](./screenshots/08-kubernetes-workloads.png) |

---

## Task Manager Application Interface

Screenshots of the deployed Task Manager multi-tier web application running inside the Kubernetes cluster:

| User Registration Page | User Login Page |
| :---: | :---: |
| ![User Signup](./screenshots/09-taskmanager-application-signup-user.png) | ![User Login](./screenshots/09-taskmanager-application-login-user.png) |

| Task Manager User Dashboard (View 1) | User Dashboard & Task Actions (View 2) |
| :---: | :---: |
| ![User Dashboard 1](./screenshots/09-taskmanager-application-userdashboard.png) | ![User Dashboard 2](./screenshots/09-taskmanager-application-userdashboard2.png) |

| User Dashboard Task Analytics (View 3) |
| :---: |
| ![User Dashboard 3](./screenshots/09-taskmanager-application-userdashboard3.png) |

---

## Monitoring & Observability

Prometheus collects metrics from the Kubernetes environment and supporting exporters.

Monitored components include:

- Kubernetes API Server
- Kubelet
- cAdvisor
- CoreDNS
- kube-state-metrics
- Node Exporter
- Prometheus
- Alertmanager
- Grafana

Prometheus targets were verified as **UP**.

### Grafana Dashboard

A custom Grafana dashboard named **Task Manager DevSecOps Monitoring** provides visibility into:

- EC2 CPU usage
- EC2 memory usage
- Task Manager pod status
- Task Manager pod restarts
- Container memory usage
- Backend container
- Frontend container
- PostgreSQL container

This dashboard helps identify resource usage, pod health, restarts, and container behavior over time.

### Observability Implementation Screenshots:

| Prometheus Query Interface |
| :---: |
| ![Prometheus Query](./screenshots/10-prometheus-query.png) |

| Target 1: Node Exporter | Target 2: Kubernetes API |
| :---: | :---: |
| ![Target 1](./screenshots/10.1-prometheus-target1.png) | ![Target 2](./screenshots/10.1-prometheus-target2.png) |

| Target 3: Backend API | Target 4: Kubelet / Cluster |
| :---: | :---: |
| ![Target 3](./screenshots/10.1-prometheus-target3.png) | ![Target 4](./screenshots/10.1-prometheus-target4.png) |

| Target 5: Jenkins / Host Metrics |
| :---: |
| ![Target 5](./screenshots/10.1-prometheus-target5.png) |

| Grafana Welcome Portal | Grafana Main Infrastructure Overview |
| :---: | :---: |
| ![Grafana Welcome](./screenshots/11-grafana-welcome-dashboard.png) | ![Grafana Overview](./screenshots/11-grafana-dashboard.png) |

| System Resources Dashboard (CPU / RAM) | Pods & Network Traffic Dashboard |
| :---: | :---: |
| ![Dashboard 1](./screenshots/12-grafana-monitoring-dashboard-1.png) | ![Dashboard 2](./screenshots/12-grafana-monitoring-dashboard-2.png) |

| Cluster Monitoring Consolidated Dashboard |
| :---: |
| ![Monitoring Dashboard](./screenshots/12.grafana-monitoring-dashboard.png) |

---

## Repository Structure

```text
Task-Manager-DevSecOps/
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── Dockerfile
│   ├── dashboard.html
│   ├── index.html
│   └── signup.html
│
├── k8s/
│   ├── namespace.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── postgres-deployment.yaml
│   ├── postgres-service.yaml
│   ├── postgres-pvc.yaml
│   ├── configmap.yaml
│   ├── secrets.yaml
│   └── ingress.yaml
│
├── screenshots/
├── docker-compose.yml
├── Jenkinsfile
├── README.md
└── .gitignore
```

---

## Running the Application Locally

### Docker Compose

```bash
git clone https://github.com/prajakta372/Task-Manager-DevSecOps.git
cd Task-Manager-DevSecOps

docker compose up -d --build
```

Check running containers:

```bash
docker ps
```

Stop the application:

```bash
docker compose down
```

---

## Kubernetes Deployment

After configuring the K3s cluster:

```bash
sudo k3s kubectl apply -f k8s/
```

Check resources:

```bash
sudo k3s kubectl get all -n taskmanager
```

Check ingress:

```bash
sudo k3s kubectl get ingress -n taskmanager
```

---

## Security Practices

- Docker Hub credentials are stored in **Jenkins Credentials**.
- SSH authentication uses a dedicated SSH key.
- Sensitive environment variables are excluded from source control.
- Kubernetes Secrets are used for sensitive configuration.
- `.gitignore` is used to prevent accidental secret commits.
- No passwords or private keys should be committed to GitHub.

> Before publishing this repository, verify that no `.env` files, private SSH keys, API keys, tokens, or passwords are present in Git history.

---

## Troubleshooting Experience

During development, the project involved troubleshooting real DevOps issues including:

- Docker container startup failures
- Node.js/native dependency compatibility
- MongoDB connectivity and DNS resolution
- Jenkins authentication recovery
- Jenkins-to-Kubernetes SSH connectivity
- Kubernetes deployment verification
- Prometheus target health
- Grafana metric visualization

These troubleshooting steps helped validate the complete deployment and monitoring workflow.

---

## Key DevOps Skills Demonstrated

- AWS EC2
- Linux administration
- Git/GitHub
- Jenkins CI/CD
- Jenkinsfile / Declarative Pipeline
- Docker
- Docker Hub
- Kubernetes
- K3s
- Kubernetes Services
- Kubernetes Ingress
- Kubernetes Secrets and ConfigMaps
- SSH
- Prometheus
- Grafana
- Node Exporter
- kube-state-metrics
- Container monitoring
- Log and deployment troubleshooting
- Secure credential management

---

## Future Improvements

Possible next steps:

- Add automated testing to the Jenkins pipeline.
- Add SonarQube/SonarScanner quality gates.
- Add Jenkins notifications through email/SNS.
- Add Kubernetes resource limits and health probes.
- Add Prometheus alert rules for high CPU/memory and pod failures.
- Add Grafana alerting.
- Add Terraform for infrastructure provisioning.
- Add Ansible for server configuration.
- Add HTTPS/TLS for the application ingress.

---

## Author

**Prajakta Gavhane**

MCA Graduate | AWS Certified Solutions Architect -- Associate | DevOps / Cloud Engineering

- 🌐 **Live Portfolio:** [prajakta372.github.io/my-aws-devops-portfolio/](https://prajakta372.github.io/my-aws-devops-portfolio/)
- 🐙 **GitHub Profile:** [@prajakta372](https://github.com/prajakta372)
- 💼 **LinkedIn Profile:** [Prajakta Gavhane](https://www.linkedin.com/in/prajakta-gavhane-6b145a25a)
- 📜 **Credly Certification:** [AWS Solutions Architect Badge](https://www.credly.com/badges/fc939891-f9f3-462c-b501-b829cf56cb70)

---

### Project Outcome

This project demonstrates an end-to-end DevOps workflow where application code is automatically built and containerized, images are published to a registry, deployments are performed on Kubernetes through Jenkins, deployment health is verified, and infrastructure/application metrics are monitored through Prometheus and Grafana.
