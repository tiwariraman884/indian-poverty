# SAMPARK Stack™ (Smart Adaptive Multidimensional Poverty & Resilience Kernel)

<p align="center">
  <img src="frontend/public/images/logo.png" width="150" alt="SAMPARK Logo" />
</p>

> **Digital Public Infrastructure (DPI) for Poverty Elimination (2024-2030)**
> SAMPARK Stack™ is a full-stack, AI-driven, blockchain-secured socio-technical platform designed to identify, predict, and remediate multidimensional poverty at household, village, and district levels across India.

---

## 🌟 Vision
Traditional poverty alleviation is reactive and income-based. **SAMPARK Stack™** transitions governance to a **proactive, multidimensional model** using real-time IoT, satellite, and blockchain data to ensure 100% policy effectiveness with zero leakage.

### ✨ Key Platform Features
- 🤖 **MPI Intelligence Engine**: Real-time scoring using ensemble random forest models.
- 🔗 **Blockchain Welfare Layer**: Zero-leakage delivery via Vishvasya (Permissioned Blockchain).
- 🏥 **Health AI Stack**: Early diagnostics and ABDM (Ayushman Bharat) integration.
- 🎓 **Education Engine**: FLN diagnostics and automated dropout prevention.
- ⚡ **Resilience Kernel**: Smart monitoring for housing, energy, and climate risks.

---

## 🏗 Architecture & Tech Stack

SAMPARK is built on a modular "Stack" architecture designed for high availability and military-grade security.

- **Frontend**: React 18, Tailwind CSS v4, Lucide Icons, Framer Motion.
- **Backend API**: NestJS (API Gateway), Python (FastAPI for AI Services).
- **Persistence**: PostgreSQL (Core), TimescaleDB (IoT), IPFS (Documentation).
- **Security**: OAuth 2.0 (Google Integration), Govt-grade Encryption, Audit Logs.
- **Infrastructure**: Microservices Architecture.

---

## 🚀 Quick Start (Development)

### 1. Clone & Install
```bash
git clone https://github.com/tiwariraman884/indian-poverty.git
cd indian-poverty/frontend
npm install
```

### 2. Run the Platform
```bash
npm run dev
```
The site will be available at `http://localhost:5173`.

---

## 🌐 Cross-Device Access
To open the platform on **any device** (Phone, Tablet, or another PC) within your network:
1. Ensure your devices are on the same Wi-Fi.
2. Run `npm run dev` (it is pre-configured with `--host`).
3. Open the URL provided in the terminal, typically: `http://[YOUR-LOCAL-IP]:5173`.

---

## 👤 User Profiles & Security
The platform features an integrated **Auth & Profile Management** system:
- **Persistent Sessions**: Your login stays active even after refresh.
- **Administrative Profiles**: Detailed profile view with security integrity monitoring.
- **Secure Logout**: Instant session termination and cache clearing.

---

## 📄 License
This project is released under the **Public Infrastructure License**. Developed for the mission of poverty elimination in India.

---
*Created by [tiwariraman884](https://github.com/tiwariraman884)*
