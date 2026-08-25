# 🚀 My AWS DevOps Portfolio & Deployment Projects

**Live Portfolio Website:** [https://prajakta372.github.io/my-aws-devops-portfolio/](https://prajakta372.github.io/my-aws-devops-portfolio/)

---

# Project Overview

This project is a comprehensive DevOps and Cloud Engineering portfolio showcasing end-to-end infrastructure provisioning, containerization, Kubernetes orchestration, CI/CD pipeline automation, and monitoring observability.

The main purpose of this project was to explore different deployment and DevOps approaches using AWS, Docker, Kubernetes, Jenkins, Prometheus, Grafana, and Linux.

---

# Features

* AWS Cloud Infrastructure Setup (EC2 & S3)
* Multi-stage Docker Containerization
* Kubernetes (K3s) Cluster & Declarative Manifest Deployment
* Continuous Integration & Deployment via Jenkins CI/CD Pipeline
* Full-stack Task Manager Application Deployment
* Real-time Observability & Monitoring with Prometheus & Grafana

---

# Technologies Used

## Frontend & Web Application
* React.js / Vite
* JavaScript (ES6+)
* HTML5 / CSS3

## Cloud & DevOps Tools
* **Cloud Infrastructure**: AWS EC2, AWS S3, AWS IAM, VPC, CloudWatch
* **Containerization**: Docker, Multi-stage Builds, Docker Compose
* **Orchestration**: Kubernetes (K3s), kubectl, Ingress Controllers, Services, Deployments
* **CI/CD Automation**: Jenkins, Declarative Jenkinsfile, GitHub Hooks
* **Monitoring & Observability**: Prometheus, Grafana, Node Exporter
* **Operating System**: Linux (Ubuntu), SSH, Bash Scripting

---

# Approach 1 — AWS Cloud & Linux Server Setup

## Purpose
Provision secure cloud compute on AWS EC2 and configure Linux remote administration via SSH.

---

## Steps Followed

### 1. Created AWS EC2 Instance
* Opened AWS Management Console -> EC2 Dashboard
* Launched Ubuntu Linux EC2 instance
* Configured key pair (`.pem` file) and Security Groups

| Screenshot |
| :---: |
| ![AWS EC2 Instance](./screenshots/01-aws-ec2-instance.png) |

---

### 2. Connected to EC2 Using SSH
```bash
chmod 400 key.pem
ssh -i key.pem ubuntu@PUBLIC_IP
```

| Screenshot |
| :---: |
| ![Ubuntu SSH](./screenshots/02-ubuntu-ssh.png) |

---

# Approach 2 — Dockerized Deployment

## Purpose
Used Docker to containerize application services for isolated and portable execution.

---

## Steps Followed

### 1. Installed Docker Engine
```bash
sudo apt update -y
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
```

### 2. Built & Ran Docker Container
```bash
sudo docker build -t task-manager .
sudo docker run -d -p 8080:80 --name task-container task-manager
```

| Screenshot |
| :---: |
| ![Docker Status](./screenshots/03-docker.png) |

---

# Approach 3 — Kubernetes (K3s) Cluster Orchestration

## Purpose
Orchestrated multi-tier containerized workloads using K3s Kubernetes cluster on AWS EC2.

---

## Steps Followed

### 1. Set Up K3s Cluster & Verified Nodes
* Installed K3s lightweight Kubernetes engine
* Verified node status using `kubectl get nodes`

| K3s Cluster Status | Kubernetes Node Health |
| :---: | :---: |
| ![K3s Running](./screenshots/04-k3s-running.png) | ![Kubernetes Node](./screenshots/05-kubernetes-node.png) |

---

### 2. Configured Kubernetes Declarative Manifests
Created YAML manifests:
* `namespace.yaml` - Scoped cluster environment
* `backend-deployment.yaml` - Backend API pods & ClusterIP service
* `frontend-deployment.yaml` - Frontend web UI pods & service
* `ingress.yaml` - NGINX Ingress rules for routing

| Manifest Files Overview | Namespace Spec (`namespace.yaml`) |
| :---: | :---: |
| ![Manifests](./screenshots/05.1-kubernetes-manifests.png) | ![Namespace Spec](./screenshots/05.2-namespace-yaml.png) |

| Backend Deployment YAML | Frontend Deployment YAML |
| :---: | :---: |
| ![Backend Deployment](./screenshots/05.3-backend-deployment.yaml.png) | ![Frontend Deployment](./screenshots/05.4-frontend-deployment.yaml.png) |

---

### 3. Applied Ingress, Services & Workloads
```bash
kubectl apply -f namespace.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f ingress.yaml
```

| Ingress Configuration | Services Overview (`kubectl get svc`) |
| :---: | :---: |
| ![Ingress](./screenshots/06-kubernetes-ingress.png) | ![Services](./screenshots/07-kubernetes-services.png) |

| Kubernetes Active Workloads & Pods (`kubectl get pods`) |
| :---: |
| ![Kubernetes Workloads](./screenshots/08-kubernetes-workloads.png) |

---

# Approach 4 — Deployed Task Manager Application

## Purpose
Verified end-to-end user features for the deployed Task Manager application stack.

---

## User Interface & Screenshots

| User Signup Page | User Login Page |
| :---: | :---: |
| ![Signup](./screenshots/09-taskmanager-application-signup-user.png) | ![Login](./screenshots/09-taskmanager-application-login-user.png) |

| User Dashboard (View 1) | User Dashboard & Tasks (View 2) |
| :---: | :---: |
| ![User Dashboard 1](./screenshots/09-taskmanager-application-userdashboard.png) | ![User Dashboard 2](./screenshots/09-taskmanager-application-userdashboard2.png) |

| User Dashboard Task Analytics (View 3) |
| :---: |
| ![User Dashboard 3](./screenshots/09-taskmanager-application-userdashboard3.png) |

---

# Approach 5 — Jenkins CI/CD Automation Pipeline

## Purpose
Automated code checkout, testing, Docker image creation, and Kubernetes deployment rollout.

---

## Steps Followed

### 1. Configured Jenkins Server & Global Tools
* Provisioned Jenkins automation server on AWS EC2
* Configured Global Tool Configuration (JDK, Node.js, Docker, Git)

| Jenkins SSH Access | Jenkins Dashboard |
| :---: | :---: |
| ![Jenkins SSH](./screenshots/13-jenkins-server-ssh.png) | ![Jenkins Dashboard](./screenshots/13.1-jenkins-server.png) |

| Jenkins Global Tools Configuration |
| :---: |
| ![Jenkins Tools](./screenshots/13.2-jenkins-server-tools.png) |

---

### 2. Created Declarative Jenkinsfile Pipeline
Authored pipeline stages:
1. `Checkout` code from GitHub repository
2. `Build & Test` application code
3. `Build & Push Docker Image` to registry
4. `Deploy to Kubernetes Cluster` via `kubectl apply`

| Jenkinsfile Code (Part 1) | Jenkinsfile Code (Part 2) |
| :---: | :---: |
| ![Jenkinsfile Part 1](./screenshots/13.3-jenkinsfile-part1.png) | ![Jenkinsfile Part 2](./screenshots/13.3-jenkinsfile-part2.png) |

---

### 3. Pipeline Execution & Logs

| Pipeline Build Success | Pipeline Stage View |
| :---: | :---: |
| ![Pipeline Success](./screenshots/13.4-jenkins-pipeline-success.png) | ![Stage View](./screenshots/13.5-jenkins-pipeline-stages.png) |

| Console Output (Build Phase) | Console Output (Deploy Phase) |
| :---: | :---: |
| ![Console Output 1](./screenshots/13.6-console-output.png) | ![Console Output 2](./screenshots/13.7-console-output-2.png) |

---

# Approach 6 — Prometheus & Grafana Observability

## Purpose
Monitored cluster & infrastructure health with Prometheus scrape targets and Grafana dashboards.

---

## Steps Followed

### 1. Configured Prometheus Scrape Targets
* Set up Prometheus expression browser
* Monitored 5 active scrape targets (Node Exporter, K8s API, Backend, Kubelet, Jenkins)

| Prometheus Query Interface |
| :---: |
| ![Prometheus Query](./screenshots/10-prometheus-query.png) |

| Target 1: Node Exporter | Target 2: Kubernetes API |
| :---: | :---: |
| ![Target 1](./screenshots/10.1-prometheus-target1.png) | ![Target 2](./screenshots/10.1-prometheus-target2.png) |

| Target 3: Backend API | Target 4: Kubelet / Cluster |
| :---: | :---: |
| ![Target 3](./screenshots/10.1-prometheus-target3.png) | ![Target 4](./screenshots/10.1-prometheus-target4.png) |

| Target 5: Jenkins Server |
| :---: |
| ![Target 5](./screenshots/10.1-prometheus-target5.png) |

---

### 2. Configured Grafana Monitoring Dashboards
* Linked Prometheus data source
* Visualized CPU/Memory, Pod status, and network metrics

| Grafana Home Portal | Grafana Main Overview |
| :---: | :---: |
| ![Grafana Welcome](./screenshots/11-grafana-welcome-dashboard.png) | ![Grafana Overview](./screenshots/11-grafana-dashboard.png) |

| System Resources Dashboard (CPU/RAM) | Pods & Network Traffic Dashboard |
| :---: | :---: |
| ![Dashboard 1](./screenshots/12-grafana-monitoring-dashboard-1.png) | ![Dashboard 2](./screenshots/12-grafana-monitoring-dashboard-2.png) |

| Cluster Monitoring Consolidated View |
| :---: |
| ![Monitoring Dashboard](./screenshots/12.grafana-monitoring-dashboard.png) |

---

# Docker Commands Used

## Build Docker Image
```bash
sudo docker build -t task-manager .
```

## Run Docker Container
```bash
sudo docker run -d -p 8080:80 --name task-container task-manager
```

## View Running Containers
```bash
sudo docker ps
```

## View Container Logs
```bash
sudo docker logs task-container
```

---

# Kubernetes Commands Used

## View Cluster Nodes
```bash
kubectl get nodes
```

## Apply Manifests
```bash
kubectl apply -f namespace.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f ingress.yaml
```

## View Services
```bash
kubectl get svc -n task-namespace
```

## View Running Pods
```bash
kubectl get pods -n task-namespace
```

---

# Linux Commands Used

```bash
ls -la
pwd
cd
mkdir
rm -rf
nano
chmod 400 key.pem
ssh -i key.pem ubuntu@PUBLIC_IP
systemctl status docker
```

---

# Networking Concepts Used

* Public IP & Private IP
* SSH Authentication
* Port Mapping (`8080:80`)
* AWS Security Groups (`22`, `80`, `443`, `8080`, `9090`, `3000`, `6443`)
* Kubernetes Ingress Routing
* Prometheus Metric Scraping

---

# Security Group Configuration

| Port | Protocol | Purpose |
| :--- | :--- | :--- |
| 22 | TCP | SSH Server Access |
| 80 | TCP | HTTP Web Traffic |
| 443 | TCP | HTTPS Web Traffic |
| 8080 | TCP | Jenkins Automation Server |
| 9090 | TCP | Prometheus Monitoring UI |
| 3000 | TCP | Grafana Observability UI |
| 6443 | TCP | Kubernetes API Server |

---

# Troubleshooting Challenges Faced

## 1. SSH Permission Error
* **Issue:** `Permissions 0644 are too open`
* **Solution:** Updated key permissions using `chmod 400 key.pem`

## 2. Docker Daemon Permission Issue
* **Issue:** `Got permission denied while trying to connect to Docker daemon`
* **Solution:** Added user to docker group using `sudo usermod -aG docker ubuntu`

## 3. Kubernetes Ingress Routing Issue
* **Issue:** Site not reachable via ingress endpoint
* **Solution:** Updated host mapping and opened security group ports

## 4. Prometheus Target Down
* **Issue:** Target scrape metric showing `DOWN` status
* **Solution:** Checked target service port exposition and updated `prometheus.yml`

---

# Key Learnings

* AWS cloud infrastructure provisioning & security group management
* Docker containerization and image optimization
* Kubernetes cluster setup (K3s) & declarative manifest deployment
* Jenkins CI/CD pipeline automation with `Jenkinsfile`
* Prometheus metric scraping & Grafana dashboard visualization
* Linux administration, SSH connectivity, and networking fundamentals

---

# Author

Prajakta Dnyaneshwar Gavhane  
*AWS Certified Solutions Architect – Associate*  
*DevOps & Cloud Engineer*

- 🌐 **Live Portfolio:** [prajakta372.github.io/my-aws-devops-portfolio/](https://prajakta372.github.io/my-aws-devops-portfolio/)
- 🐙 **GitHub:** [@prajakta372](https://github.com/prajakta372)
- 💼 **LinkedIn:** [Prajakta Gavhane](https://www.linkedin.com/in/prajakta-gavhane-6b145a25a)
- 📜 **Credly Certification:** [AWS Solutions Architect Badge](https://www.credly.com/badges/fc939891-f9f3-462c-b501-b829cf56cb70)
