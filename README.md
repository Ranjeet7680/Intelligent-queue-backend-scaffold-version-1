# 🧾 Intelligent Queue & Token Management System – Backend
**Node.js + Express + MongoDB | JWT Auth | Validation | Business Logic**

This backend powers an intelligent queue & token management system used in banks, hospitals, and multi-counter service centers.  
It handles **token generation, sequencing, authentication, counter allocation, skipping, lunch-break rules, and validation**.

---

## 🚀 Features

### 🔐 Authentication (JWT)
- Admin & Counter login  
- Access + Refresh tokens  
- Role-based security  
- Bcrypt password hashing  

### 🎫 Token Operations
- Generate new tokens  
- Get next token for a counter  
- Serve a token  
- Skip a token  
- Same-day token logic  
- FIFO queue ordering  

### 🛡 Input Validation
- Joi schema validation  
- Reject unknown fields  
- Sanitized request bodies  

### 🕒 Configurable Business Rules
- Lunch break pause  
- Token lifecycle: `waiting → serving → served/skipped`  
- Date-based token reset  

---

## 📁 Project Structure

