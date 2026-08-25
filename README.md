# 🚀 End-to-End AWS DevOps & DevSecOps Portfolio

[![Live Portfolio](https://img.shields.io/badge/Website-Live%20Portfolio-brightgreen?style=for-the-badge&logo=github)](https://prajakta372.github.io/my-aws-devops-portfolio/)
[![AWS Certified](https://img.shields.io/badge/AWS-Solutions%20Architect%20Associate-FF9900?style=for-the-badge&logo=amazonaws)](https://www.credly.com/badges/fc939891-f9f3-462c-b501-b829cf56cb70)
[![Docker](https://img.shields.io/badge/Docker-Containerization-2496ED?style=for-the-badge&logo=docker)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?style=for-the-badge&logo=kubernetes)](https://kubernetes.io/)
[![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD%20Automation-D24939?style=for-the-badge&logo=jenkins)](https://www.jenkins.io/)
[![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-E6522C?style=for-the-badge&logo=prometheus)](https://prometheus.io/)
[![Grafana](https://img.shields.io/badge/Grafana-Observability-F46800?style=for-the-badge&logo=grafana)](https://grafana.com/)

> **Engineer:** Prajakta Gavhane  
> **GitHub:** [@prajakta372](https://github.com/prajakta372)  
> **Portfolio URL:** [https://prajakta372.github.io/my-aws-devops-portfolio/](https://prajakta372.github.io/my-aws-devops-portfolio/)

---

## 📌 Project Overview

This repository contains the complete documentation, deployment artifacts, infrastructure configs, and screenshots for an **End-to-End Production-Grade AWS DevOps & DevSecOps Pipeline**.

The project demonstrates a real-world enterprise workflow: provisioning AWS EC2 cloud infrastructure, containerizing multi-tier applications using Docker, orchestrating workloads on a Kubernetes (K3s) cluster, automating continuous integration and deployment with Jenkins pipelines, and establishing real-time observability and alerting using Prometheus and Grafana.

---

## 🏗️ End-to-End Pipeline Architecture Workflow

```mermaid
flowchart LR
    A[💻 Developer Code Commit] -->|Git Push| B[🐙 GitHub Repository]
    B -->|Webhook Trigger| C[⚙️ Jenkins Automation Server]
    C -->|Static Analysis & Build| D[🐳 Docker Image Build & Packaging]
    D -->|Deploy Manifests| E[☸️ Kubernetes Cluster (K3s / AWS EC2)]
    E -->|Route Traffic| F[🌐 NGINX Ingress Controller]
    F -->|Serve Users| G[📱 Task Manager Application]
    E -->|Scrape Metrics| H[📊 Prometheus Server]
    H -->|Visualize Metrics| I[📈 Grafana Dashboard]
```

---

## 🛠️ Technology Stack & Tools

| Domain | Technologies & Tools |
| :--- | :--- |
| **Cloud Computing** | AWS EC2, AWS S3, AWS IAM, VPC, CloudWatch |
| **Operating System** | Ubuntu Linux, Bash Shell |
| **Containerization** | Docker, Docker Compose, Multi-stage Builds |
| **Orchestration** | Kubernetes (K3s), kubectl, Ingress Controllers, Services, Deployments |
| **CI/CD Automation** | Jenkins, Declarative Jenkinsfile, GitHub Hooks |
| **Monitoring & Observability** | Prometheus, Grafana, Node Exporter, Metric Scraping |
| **Frontend & UI** | React, HTML5, CSS3, JavaScript (Vite SPA) |

---

## 📑 Complete Step-by-Step DevOps Implementation Guide

---

### Phase 1: AWS Infrastructure & Compute Provisioning

1. **AWS EC2 Instance Setup**: Provisioned Linux Ubuntu compute instance on AWS with customized EBS volume storage and elastic IP allocations.
2. **Security Group Configuration**: Hardened network ingress/egress firewall rules opening ports `22` (SSH), `80` (HTTP), `443` (HTTPS), `8080` (Jenkins), `9090` (Prometheus), `3000` (Grafana), and `6443` (Kubernetes API).
3. **SSH Shell Connectivity**: Configured secure key-pair authentication to connect remotely to the AWS Ubuntu server.

#### 📷 Implementation Screenshots:
| AWS EC2 Instance Status | Ubuntu Terminal SSH Connection |
| :---: | :---: |
| ![AWS EC2 Instance](./screenshots/01-aws-ec2-instance.png) | ![Ubuntu SSH Connection](./screenshots/02-ubuntu-ssh.png) |

---

### Phase 2: Containerization with Docker

1. **Docker Engine Installation**: Installed Docker CE engine, `containerd`, and configured user group permissions for execution without `sudo`.
2. **Dockerfile Packaging**: Authored optimized multi-stage Dockerfiles packaging the frontend and backend applications into lightweight container images.
3. **Container Isolation & Runtime Verification**: Verified container isolation, log streaming, port forwarding, and restart policies.

#### 📷 Implementation Screenshots:
| Docker Environment & Container Status |
| :---: |
| ![Docker Runtime Status](./screenshots/03-docker.png) |

---

### Phase 3: Kubernetes Cluster Setup & Workload Deployment

1. **K3s Kubernetes Engine Setup**: Deployed a lightweight, high-performance Kubernetes (K3s) cluster on AWS EC2 nodes.
2. **Cluster & Node Verification**: Verified cluster health using `kubectl get nodes` and namespace isolation.
3. **Kubernetes Declarative Manifests**:
   - `namespace.yaml`: Scoped environment namespace separation.
   - `backend-deployment.yaml`: Replicated Pods and ClusterIP service for the API tier.
   - `frontend-deployment.yaml`: Replicated Pods and NodePort/ClusterIP service for web UI.
   - `ingress.yaml`: Configured NGINX Ingress Controller rules for domain routing and path mapping.

#### 📷 Implementation Screenshots:
| K3s Cluster Engine Status | Kubernetes Node Health (`kubectl get nodes`) |
| :---: | :---: |
| ![K3s Running Status](./screenshots/04-k3s-running.png) | ![Kubernetes Node](./screenshots/05-kubernetes-node.png) |

| Kubernetes Manifests Files Overview | Namespace Specification (`namespace.yaml`) |
| :---: | :---: |
| ![K8s Manifests](./screenshots/05.1-kubernetes-manifests.png) | ![Namespace Spec](./screenshots/05.2-namespace-yaml.png) |

| Backend Deployment YAML | Frontend Deployment YAML |
| :---: | :---: |
| ![Backend Deployment](./screenshots/05.3-backend-deployment.yaml.png) | ![Frontend Deployment](./screenshots/05.4-frontend-deployment.yaml.png) |

| Kubernetes Ingress Config (`ingress.yaml`) | Kubernetes Services Overview (`kubectl get svc`) |
| :---: | :---: |
| ![Kubernetes Ingress](./screenshots/06-kubernetes-ingress.png) | ![Kubernetes Services](./screenshots/07-kubernetes-services.png) |

| Kubernetes Active Workloads & Pods (`kubectl get pods`) |
| :---: |
| ![Kubernetes Workloads](./screenshots/08-kubernetes-workloads.png) |

---

### Phase 4: Full-Stack Task Manager Application Deployment

1. **Application Deployment**: Successfully launched the Task Manager application stack on the Kubernetes cluster.
2. **User Authentication & Features**: Verified end-to-end functionality including user registration, login authentication, user dashboard, task creation, and analytics tracking.

#### 📷 Implementation Screenshots:
| User Registration Page | User Login Page |
| :---: | :---: |
| ![Signup Interface](./screenshots/09-taskmanager-application-signup-user.png) | ![Login Interface](./screenshots/09-taskmanager-application-login-user.png) |

| Task Manager User Dashboard (View 1) | User Dashboard & Tasks List (View 2) |
| :---: | :---: |
| ![User Dashboard 1](./screenshots/09-taskmanager-application-userdashboard.png) | ![User Dashboard 2](./screenshots/09-taskmanager-application-userdashboard2.png) |

| User Dashboard Task Analytics (View 3) |
| :---: |
| ![User Dashboard 3](./screenshots/09-taskmanager-application-userdashboard3.png) |

---

### Phase 5: Continuous Integration & Deployment (CI/CD) with Jenkins

1. **Jenkins Automation Server**: Provisioned dedicated Jenkins server on AWS EC2, configured administrative credentials, and installed core plugins (Git, Docker Pipeline, Kubernetes CLI).
2. **Global Tool Configuration**: Configured automated tool installations for JDK, Node.js, Docker, and Git.
3. **Declarative Jenkinsfile Pipeline**:
   - **Checkout**: Pull latest source code from GitHub repository.
   - **Build & Test**: Compile dependencies and execute unit tests.
   - **Docker Build & Push**: Build tagged Docker container images and push to registry.
   - **Kubernetes Deploy**: Apply updated manifests (`kubectl apply -f .`) to rollout zero-downtime updates.
4. **Pipeline Execution & Logs**: Monitored real-time Stage View execution and verified clean build output logs.

#### 📷 Implementation Screenshots:
| Jenkins Server Host SSH Access | Jenkins Server Main Dashboard |
| :---: | :---: |
| ![Jenkins Server SSH](./screenshots/13-jenkins-server-ssh.png) | ![Jenkins Server Dashboard](./screenshots/13.1-jenkins-server.png) |

| Jenkins Global Tool Configuration |
| :---: |
| ![Jenkins Server Tools](./screenshots/13.2-jenkins-server-tools.png) |

| Declarative Jenkinsfile (Part 1 - Environment & Stages) | Declarative Jenkinsfile (Part 2 - Docker & K8s Rollout) |
| :---: | :---: |
| ![Jenkinsfile Part 1](./screenshots/13.3-jenkinsfile-part1.png) | ![Jenkinsfile Part 2](./screenshots/13.3-jenkinsfile-part2.png) |

| Jenkins Pipeline Successful Build | Jenkins Pipeline Stage View Visualizer |
| :---: | :---: |
| ![Jenkins Pipeline Success](./screenshots/13.4-jenkins-pipeline-success.png) | ![Jenkins Stage View](./screenshots/13.5-jenkins-pipeline-stages.png) |

| Jenkins Console Logs (Build & Package Phase) | Jenkins Console Logs (Deploy & Rollout Phase) |
| :---: | :---: |
| ![Console Output 1](./screenshots/13.6-console-output.png) | ![Console Output 2](./screenshots/13.7-console-output-2.png) |

---

### Phase 6: Observability & Monitoring with Prometheus & Grafana

1. **Prometheus Monitoring Server**: Configured Prometheus to pull metrics from Node Exporter, Kubernetes cluster endpoints, backend services, and Jenkins.
2. **Target Monitoring Health**: Verified all 5 scrape targets are reporting `UP` state with zero target failures.
3. **Grafana Real-Time Dashboards**: Connected Prometheus data source to Grafana and created customized dashboards for CPU, memory usage, network throughput, and Kubernetes Pod health.

#### 📷 Implementation Screenshots:
| Prometheus Expression Browser & Querying |
| :---: |
| ![Prometheus Query UI](./screenshots/10-prometheus-query.png) |

| Scrape Target 1: Node Exporter | Scrape Target 2: Kubernetes API |
| :---: | :---: |
| ![Prometheus Target 1](./screenshots/10.1-prometheus-target1.png) | ![Prometheus Target 2](./screenshots/10.1-prometheus-target2.png) |

| Scrape Target 3: Backend Services | Scrape Target 4: Kubelet / Cluster |
| :---: | :---: |
| ![Prometheus Target 3](./screenshots/10.1-prometheus-target3.png) | ![Prometheus Target 4](./screenshots/10.1-prometheus-target4.png) |

| Scrape Target 5: Jenkins / Host Metrics |
| :---: |
| ![Prometheus Target 5](./screenshots/10.1-prometheus-target5.png) |

| Grafana Home Portal | Grafana Main Infrastructure Dashboard |
| :---: | :---: |
| ![Grafana Welcome](./screenshots/11-grafana-welcome-dashboard.png) | ![Grafana Overview](./screenshots/11-grafana-dashboard.png) |

| Grafana System Metrics (CPU / RAM) | Grafana Pods & Network Traffic |
| :---: | :---: |
| ![Grafana Dashboard 1](./screenshots/12-grafana-monitoring-dashboard-1.png) | ![Grafana Dashboard 2](./screenshots/12-grafana-monitoring-dashboard-2.png) |

| Grafana Cluster Monitoring Consolidated Dashboard |
| :---: |
| ![Grafana Monitoring Dashboard](./screenshots/12.grafana-monitoring-dashboard.png) |

---

## 🔒 Security Controls & Best Practices

- **IAM Least Privilege**: Enforced restrictive policy scopes for AWS services and credentials access.
- **Network Isolation**: Configured Security Groups blocking unused ports and restricting SSH ingress.
- **Namespace Scoping**: Utilized Kubernetes namespaces to prevent cross-environment resource contamination.
- **Immutable Infrastructure**: Used versioned Docker tags for deterministic deployments and instant rollbacks.

---

## 🚀 How to Run & Reproduce

### 1. Prerequisites
- AWS Account with EC2 & IAM permissions.
- Docker Engine & Kubernetes CLI (`kubectl`) installed locally or on host.
- Jenkins Automation Server.

### 2. Local Setup
```bash
# Clone the repository
git clone https://github.com/prajakta372/my-aws-devops-portfolio.git

# Navigate into project directory
cd my-aws-devops-portfolio

# Install node dependencies
npm install

# Start local development server
npm run dev
```

---

## 👤 Author & Contact

**Prajakta Gavhane**  
*AWS Certified Solutions Architect – Associate*  
*DevOps & Cloud Engineer*

- 🌐 **Live Portfolio:** [prajakta372.github.io/my-aws-devops-portfolio/](https://prajakta372.github.io/my-aws-devops-portfolio/)
- 🐙 **GitHub Profile:** [@prajakta372](https://github.com/prajakta372)
- 💼 **LinkedIn Profile:** [Prajakta Gavhane](https://www.linkedin.com/in/prajakta-gavhane-6b145a25a)
- 📜 **Credly Certification:** [AWS Solutions Architect Associate Badge](https://www.credly.com/badges/fc939891-f9f3-462c-b501-b829cf56cb70)
