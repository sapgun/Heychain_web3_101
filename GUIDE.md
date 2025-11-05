# Swift Market: Complete A-to-Z Building Guide

## XRPL-based Global P2P Marketplace Development Guide

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Architecture & Tech Stack](#2-architecture--tech-stack)
3. [Firestore Data Models](#3-firestore-data-models)
4. [Step-by-Step Development Guide (40-hour PoC)](#4-step-by-step-development-guide-40-hour-poc)
5. [Core XRPL Implementation Details](#5-core-xrpl-implementation-details)
6. [Security & DevOps Best Practices](#6-security--devops-best-practices)
7. [Final PoC Checklist](#7-final-poc-checklist)

---

## 1. Project Overview

### Project Name
**Swift Market**

### One-Liner
An XRPL-based Global P2P Marketplace revolutionizing peer-to-peer commerce with near-zero fees and instant settlements.

### Problem to Solve
Current global P2P marketplaces suffer from:
- **High transaction fees**: 15%+ per transaction
- **Slow settlement times**: 2+ weeks for fund release
- **Lack of trust mechanisms**: Limited dispute resolution
- **Geographic limitations**: Restricted cross-border transactions
- **Centralized control**: Single points of failure

### Core Solution
Swift Market leverages the XRP Ledger (XRPL) to provide:
- **Near-zero transaction fees**: <$0.01 per transaction
- **5-second settlement**: Instant finality and fund release
- **Built-in escrow**: Secure on-chain escrow without intermediaries
- **Global accessibility**: Borderless transactions 24/7
- **Decentralized security**: Cryptographic proof and consensus

### Key Value Propositions
1. **Cost Efficiency**: Reduce marketplace fees from 15%+ to <1%
2. **Speed**: Instant settlements vs. weeks of waiting
3. **Security**: Cryptographic escrow vs. centralized custody
4. **Global Reach**: Serve underbanked regions with internet access
5. **Transparency**: All transactions verifiable on-chain

---

## 2. Architecture & Tech Stack

### System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                          Frontend Layer                        │
├─────────────────────────────────────────────────────────────────┤
│  Next.js App (TypeScript)                                      │
│  ├── Authentication (Privy SDK)                                │
│  ├── UI Components (Tailwind CSS)                              │
│  ├── State Management (React Hooks)                            │
│  └── XRPL Integration (xrpl.js)                                │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 │ HTTPS/WebSocket
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                         Backend Layer                          │
├─────────────────────────────────────────────────────────────────┤
│  Firebase Functions (TypeScript)                               │
│  ├── User Management API                                       │
│  ├── Product Catalog API                                       │
│  ├── Order Processing API                                      │
│  ├── XRPL Transaction API                                      │
│  └── Webhook Handlers                                          │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 │ Realtime DB Connection
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Database Layer                          │
├─────────────────────────────────────────────────────────────────┤
│  Firebase Firestore                                            │
│  ├── Users Collection                                          │
│  ├── Products Collection                                       │
│  ├── Orders Collection                                         │
│  ├── Transactions Collection                                   │
│  └── Real-time Sync                                            │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 │ Blockchain Integration
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                       Blockchain Layer                         │
├─────────────────────────────────────────────────────────────────┤
│  XRPL Testnet                                                  │
│  ├── Escrow Transactions                                       │
│  ├── Payment Channels                                          │
│  ├── Account Credentials                                       │
│  └── Transaction Memos                                         │
└─────────────────────────────────────────────────────────────────┘
```

### Technology Stack

#### Authentication Layer
- **Privy SDK**: Social login & embedded wallets
  - Google, Facebook, Twitter OAuth
  - Email/SMS authentication
  - Embedded wallet creation
  - Cross-platform compatibility

#### Frontend Stack
- **Next.js 15**: React framework with SSR/SSG
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **React Hook Form**: Form management
- **Zustand**: Lightweight state management
- **SWR**: Data fetching and caching

#### Backend Stack
- **Firebase Functions**: Serverless TypeScript functions
- **Express.js**: HTTP request routing
- **Cors**: Cross-origin resource sharing
- **Helmet**: Security middleware
- **Rate Limiting**: API protection

#### Database Layer
- **Firebase Firestore**: NoSQL document database
- **Real-time Sync**: Live updates across clients
- **Offline Support**: Local caching and sync
- **Security Rules**: Declarative access control

#### Blockchain Integration
- **XRPL Testnet**: XRP Ledger testing environment
- **xrpl.js**: JavaScript/TypeScript XRPL client
- **WebSocket**: Real-time ledger connection
- **Escrow**: Built-in conditional payments

#### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **Jest**: Unit testing
- **Cypress**: E2E testing

### Data Flow Architecture

```
User Action → Frontend → Firebase Auth → Firebase Functions → Firestore
                 ↓
            XRPL Client → XRP Ledger → Transaction Confirmation
                 ↓
            Real-time Updates → Frontend UI Update
```

---

## 3. Firestore Data Models

### TypeScript Interfaces

#### User Collection
```typescript
interface User {
  id: string;                    // Firestore document ID
  privyId: string;              // Privy user identifier
  walletAddress: string;        // XRPL wallet address
  email?: string;               // User email (optional)
  displayName: string;          // Display name
  avatar?: string;              // Profile picture URL
  reputation: number;           // User reputation score (0-100)
  totalTransactions: number;    // Total completed transactions
  joinedAt: Timestamp;          // Account creation date
  lastActiveAt: Timestamp;      // Last activity timestamp
  preferences: UserPreferences; // User settings
  verification: UserVerification; // KYC status
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

interface UserPreferences {
  currency: string;             // Preferred currency (USD, EUR, etc.)
  language: string;             // Preferred language
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  privacy: {
    showEmail: boolean;
    showPhone: boolean;
    publicProfile: boolean;
  };
}

interface UserVerification {
  status: 'pending' | 'verified' | 'rejected' | 'none';
  submittedAt?: Timestamp;
  verifiedAt?: Timestamp;
  documents: string[];          // Document URLs
  notes?: string;               // Admin notes
}
```

#### Product Collection
```typescript
interface Product {
  id: string;                   // Firestore document ID
  sellerId: string;             // Reference to User document
  title: string;                // Product title
  description: string;          // Detailed description
  category: ProductCategory;    // Product category
  subcategory?: string;         // Optional subcategory
  price: {
    amount: number;             // Price amount
    currency: string;           // Price currency (XRP, USD, etc.)
  };
  images: string[];             // Array of image URLs
  condition: 'new' | 'used' | 'refurbished';
  location: {
    country: string;
    city: string;
    region?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  shipping: {
    available: boolean;
    cost?: number;
    methods: ShippingMethod[];
    estimatedDays: number;
  };
  tags: string[];               // Search tags
  status: 'active' | 'sold' | 'inactive' | 'flagged';
  views: number;                // View count
  favorites: number;            // Favorite count
  createdAt: Timestamp;
  updatedAt: Timestamp;
  expiresAt?: Timestamp;        // Auto-expiry date
}

type ProductCategory = 
  | 'electronics'
  | 'clothing'
  | 'home'
  | 'books'
  | 'sports'
  | 'automotive'
  | 'art'
  | 'other';

interface ShippingMethod {
  name: string;                 // e.g., "Standard", "Express"
  cost: number;
  estimatedDays: number;
}
```

#### Order Collection
```typescript
interface Order {
  id: string;                   // Firestore document ID
  productId: string;            // Reference to Product document
  buyerId: string;              // Reference to User document (buyer)
  sellerId: string;             // Reference to User document (seller)
  status: OrderStatus;          // Current order status
  payment: PaymentDetails;      // Payment information
  escrow: EscrowDetails;        // XRPL escrow information
  shipping?: ShippingDetails;   // Shipping information
  timeline: OrderTimeline[];    // Status change history
  dispute?: DisputeDetails;     // Dispute information if any
  totalAmount: number;          // Total order amount
  currency: string;             // Order currency
  messages: Message[];          // Buyer-seller communication
  createdAt: Timestamp;
  updatedAt: Timestamp;
  completedAt?: Timestamp;
}

type OrderStatus = 
  | 'pending'           // Order created, awaiting payment
  | 'paid'             // Payment received, escrow created
  | 'processing'       // Seller preparing item
  | 'shipped'          // Item shipped
  | 'delivered'        // Item delivered
  | 'completed'        // Transaction completed
  | 'cancelled'        // Order cancelled
  | 'disputed'         // Dispute opened
  | 'refunded';        // Payment refunded

interface PaymentDetails {
  method: 'xrp' | 'credit_card' | 'bank_transfer';
  amount: number;
  currency: string;
  transactionHash?: string;     // XRPL transaction hash
  processorId?: string;         // External payment processor ID
  paidAt?: Timestamp;
}

interface EscrowDetails {
  escrowId?: string;            // XRPL escrow sequence number
  condition?: string;           // Escrow condition (hash)
  fulfillment?: string;         // Escrow fulfillment
  createdAt?: Timestamp;
  finishedAt?: Timestamp;
  cancelled?: boolean;
}

interface ShippingDetails {
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  method: string;               // Shipping method chosen
  trackingNumber?: string;      // Tracking number
  estimatedDelivery?: Timestamp;
  shippedAt?: Timestamp;
  deliveredAt?: Timestamp;
}

interface OrderTimeline {
  status: OrderStatus;
  timestamp: Timestamp;
  note?: string;
  actor: 'buyer' | 'seller' | 'system';
}

interface DisputeDetails {
  reason: string;
  description: string;
  openedBy: 'buyer' | 'seller';
  openedAt: Timestamp;
  resolvedAt?: Timestamp;
  resolution?: string;
  arbitrator?: string;
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Timestamp;
  type: 'text' | 'image' | 'system';
  read: boolean;
}
```

### Collection Indexes

#### Firestore Composite Indexes
```typescript
// Required composite indexes for efficient queries

// Products Collection
const productIndexes = [
  // Search and filter products
  ['sellerId', 'status', 'createdAt'],
  ['category', 'status', 'price.amount'],
  ['location.country', 'category', 'createdAt'],
  ['status', 'createdAt'],
  
  // User's products
  ['sellerId', 'createdAt'],
  ['sellerId', 'status'],
];

// Orders Collection
const orderIndexes = [
  // User orders
  ['buyerId', 'status', 'createdAt'],
  ['sellerId', 'status', 'createdAt'],
  ['buyerId', 'createdAt'],
  ['sellerId', 'createdAt'],
  
  // Order processing
  ['status', 'createdAt'],
  ['status', 'updatedAt'],
];

// Users Collection
const userIndexes = [
  // User search and ranking
  ['reputation', 'totalTransactions'],
  ['verification.status', 'joinedAt'],
];
```

### Security Rules Examples

```typescript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if true; // Public profiles
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Products collection
    match /products/{productId} {
      allow read: if true; // Public product listings
      allow create: if request.auth != null && 
        request.auth.uid == resource.data.sellerId;
      allow update: if request.auth != null && 
        request.auth.uid == resource.data.sellerId;
      allow delete: if request.auth != null && 
        request.auth.uid == resource.data.sellerId;
    }
    
    // Orders collection
    match /orders/{orderId} {
      allow read: if request.auth != null && 
        (request.auth.uid == resource.data.buyerId || 
         request.auth.uid == resource.data.sellerId);
      allow create: if request.auth != null && 
        request.auth.uid == request.resource.data.buyerId;
      allow update: if request.auth != null && 
        (request.auth.uid == resource.data.buyerId || 
         request.auth.uid == resource.data.sellerId);
    }
  }
}
```

---

## 4. Step-by-Step Development Guide (40-hour PoC)

### Phase 1: Environment Setup (6 hours)

#### 1.1 Firebase Project Setup (2 hours)
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Create new project
firebase projects:create swift-market-poc

# Initialize Firebase in project
firebase init

# Select the following services:
# - Firestore
# - Functions
# - Hosting
# - Authentication
```

**Configuration Steps:**
1. Enable Firestore in Firebase console
2. Set up Authentication providers (Google, Email)
3. Configure Firestore security rules
4. Set up Firebase Functions environment

#### 1.2 Privy Integration Setup (2 hours)
```bash
# Install Privy SDK
npm install @privy-io/react-auth @privy-io/wagmi-connector

# Environment variables
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
PRIVY_APP_SECRET=your_privy_app_secret
```

**Privy Configuration:**
1. Create account at [privy.io](https://privy.io)
2. Set up new app and get API keys
3. Configure authentication methods
4. Set up embedded wallet settings

#### 1.3 XRPL Account Setup (2 hours)
```bash
# Install XRPL library
npm install xrpl

# Create test accounts
npm run create-xrpl-accounts
```

**XRPL Setup Steps:**
1. Connect to XRPL Testnet
2. Generate test accounts with funding
3. Set up wallet credentials securely
4. Test basic transactions

---

### Phase 2: Backend Development (16 hours)

#### 2.1 Core Firebase Functions (8 hours)

**User Management API (2 hours)**
```typescript
// functions/src/users.ts
import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { auth } from 'firebase-admin';

export const createUser = onCall(async (request) => {
  const { privyId, walletAddress, email, displayName } = request.data;
  
  // Verify Privy token
  const privyUser = await verifyPrivyToken(request.auth?.token);
  if (!privyUser) {
    throw new HttpsError('unauthenticated', 'Invalid Privy token');
  }
  
  // Create user document
  const userDoc = {
    privyId,
    walletAddress,
    email,
    displayName,
    reputation: 0,
    totalTransactions: 0,
    joinedAt: new Date(),
    lastActiveAt: new Date(),
  };
  
  await firestore.collection('users').doc(privyUser.uid).set(userDoc);
  return { success: true, userId: privyUser.uid };
});

export const getUserProfile = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Authentication required');
  }
  
  const userDoc = await firestore.collection('users').doc(request.auth.uid).get();
  return userDoc.data();
});
```

**Product Catalog API (3 hours)**
```typescript
// functions/src/products.ts
export const createProduct = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Authentication required');
  }
  
  const productData = {
    ...request.data,
    sellerId: request.auth.uid,
    status: 'active',
    views: 0,
    favorites: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  const productRef = await firestore.collection('products').add(productData);
  return { productId: productRef.id };
});

export const getProducts = onCall(async (request) => {
  const { category, location, priceRange, limit = 20, offset = 0 } = request.data;
  
  let query = firestore.collection('products')
    .where('status', '==', 'active')
    .orderBy('createdAt', 'desc')
    .limit(limit)
    .offset(offset);
  
  if (category) {
    query = query.where('category', '==', category);
  }
  
  const snapshot = await query.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});
```

**Order Processing API (3 hours)**
```typescript
// functions/src/orders.ts
export const createOrder = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Authentication required');
  }
  
  const { productId, shippingAddress } = request.data;
  const buyerId = request.auth.uid;
  
  // Get product details
  const productDoc = await firestore.collection('products').doc(productId).get();
  const product = productDoc.data();
  
  if (!product || product.status !== 'active') {
    throw new HttpsError('not-found', 'Product not available');
  }
  
  // Create order
  const orderData = {
    productId,
    buyerId,
    sellerId: product.sellerId,
    status: 'pending',
    totalAmount: product.price.amount,
    currency: product.price.currency,
    shipping: shippingAddress,
    timeline: [{
      status: 'pending',
      timestamp: new Date(),
      actor: 'system',
      note: 'Order created'
    }],
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  const orderRef = await firestore.collection('orders').add(orderData);
  return { orderId: orderRef.id };
});
```

#### 2.2 XRPL Integration Functions (4 hours)

**Escrow Management (2 hours)**
```typescript
// functions/src/xrpl.ts
import { Client, Wallet, EscrowCreate, EscrowFinish } from 'xrpl';

export const createEscrow = onCall(async (request) => {
  const { orderId, amount, condition } = request.data;
  
  // Get authenticated user's wallet
  const walletAddress = await getUserWalletAddress(request.auth!.uid);
  
  const client = new Client('wss://s.altnet.rippletest.net:51233');
  await client.connect();
  
  const escrowTx: EscrowCreate = {
    TransactionType: 'EscrowCreate',
    Account: walletAddress,
    Destination: await getSellerWalletAddress(orderId),
    Amount: String(amount * 1000000), // Convert to drops
    Condition: condition,
    FinishAfter: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60), // 7 days
  };
  
  const prepared = await client.autofill(escrowTx);
  const wallet = await getWalletFromSecureStorage(walletAddress);
  const signed = wallet.sign(prepared);
  const result = await client.submitAndWait(signed.tx_blob);
  
  await client.disconnect();
  
  // Update order with escrow details
  await firestore.collection('orders').doc(orderId).update({
    'escrow.escrowId': result.meta?.TransactionIndex,
    'escrow.condition': condition,
    'escrow.createdAt': new Date(),
    status: 'paid'
  });
  
  return { success: true, transactionHash: result.meta?.TransactionResult };
});
```

**Transaction Monitoring (2 hours)**
```typescript
// functions/src/webhooks.ts
export const xrplWebhook = onRequest(async (req, res) => {
  const { transaction } = req.body;
  
  if (transaction.TransactionType === 'EscrowFinish') {
    // Find related order
    const ordersSnapshot = await firestore.collection('orders')
      .where('escrow.escrowId', '==', transaction.Sequence)
      .get();
    
    if (!ordersSnapshot.empty) {
      const orderDoc = ordersSnapshot.docs[0];
      await orderDoc.ref.update({
        status: 'completed',
        'escrow.finishedAt': new Date(),
        completedAt: new Date()
      });
      
      // Update user reputation
      await updateUserReputation(orderDoc.data().buyerId, 5);
      await updateUserReputation(orderDoc.data().sellerId, 5);
    }
  }
  
  res.status(200).send('OK');
});
```

#### 2.3 Authentication Integration (4 hours)

**Privy Token Verification**
```typescript
// functions/src/auth.ts
import { PrivyApi } from '@privy-io/server-auth';

const privy = new PrivyApi({
  appId: process.env.PRIVY_APP_ID!,
  appSecret: process.env.PRIVY_APP_SECRET!,
});

export async function verifyPrivyToken(token: string) {
  try {
    const user = await privy.verifyAuthToken(token);
    return user;
  } catch (error) {
    console.error('Privy token verification failed:', error);
    return null;
  }
}

export async function getUserWalletAddress(userId: string): Promise<string> {
  const userDoc = await firestore.collection('users').doc(userId).get();
  const userData = userDoc.data();
  
  if (!userData?.walletAddress) {
    throw new Error('User wallet address not found');
  }
  
  return userData.walletAddress;
}
```

---

### Phase 3: Frontend Development (14 hours)

#### 3.1 Authentication Setup (3 hours)

**Privy Provider Configuration**
```typescript
// app/providers.tsx
'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        loginMethods: ['email', 'google', 'twitter'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
        },
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
```

**Authentication Hook**
```typescript
// hooks/useAuth.ts
import { usePrivy } from '@privy-io/react-auth';
import { useEffect, useState } from 'react';

export function useAuth() {
  const { ready, authenticated, user, login, logout } = usePrivy();
  const [userProfile, setUserProfile] = useState(null);
  
  useEffect(() => {
    if (authenticated && user) {
      // Fetch user profile from Firebase
      fetchUserProfile(user.id).then(setUserProfile);
    }
  }, [authenticated, user]);
  
  return {
    ready,
    authenticated,
    user,
    userProfile,
    login,
    logout,
  };
}
```

#### 3.2 Core UI Components (6 hours)

**Product Card Component (1 hour)**
```typescript
// components/ProductCard.tsx
interface ProductCardProps {
  product: Product;
  onFavorite?: (productId: string) => void;
}

export function ProductCard({ product, onFavorite }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={product.images[0]} 
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <button 
          onClick={() => onFavorite?.(product.id)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">
            {product.price.amount} {product.price.currency}
          </span>
          <span className="text-sm text-gray-500">
            {product.location.city}, {product.location.country}
          </span>
        </div>
        
        <div className="mt-3 flex gap-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
            {product.category}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
            {product.condition}
          </span>
        </div>
      </div>
    </div>
  );
}
```

**Order Dashboard (2 hours)**
```typescript
// components/OrderDashboard.tsx
export function OrderDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<OrderStatus | 'all'>('all');
  
  const filteredOrders = orders.filter(order => 
    filter === 'all' || order.status === filter
  );
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Orders</h2>
        <OrderStatusFilter value={filter} onChange={setFilter} />
      </div>
      
      <div className="grid gap-4">
        {filteredOrders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
```

**XRPL Integration Component (3 hours)**
```typescript
// components/XRPLPayment.tsx
import { Client } from 'xrpl';

export function XRPLPayment({ order }: { order: Order }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [escrowCondition, setEscrowCondition] = useState('');
  
  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      // Generate escrow condition
      const condition = generateEscrowCondition();
      setEscrowCondition(condition);
      
      // Create escrow through Firebase function
      const result = await createEscrow({
        orderId: order.id,
        amount: order.totalAmount,
        condition
      });
      
      if (result.success) {
        toast.success('Payment processed successfully!');
      }
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-4">Complete Payment</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Product Price:</span>
          <span className="font-semibold">
            {order.totalAmount} {order.currency}
          </span>
        </div>
        
        <div className="border-t pt-4">
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isProcessing ? 'Processing...' : 'Pay with XRP'}
          </button>
        </div>
        
        {escrowCondition && (
          <div className="text-sm text-gray-600">
            <p>Escrow Condition: {escrowCondition.slice(0, 20)}...</p>
          </div>
        )}
      </div>
    </div>
  );
}
```

#### 3.3 State Management (2 hours)

**Zustand Store Setup**
```typescript
// store/useStore.ts
import { create } from 'zustand';

interface AppState {
  user: User | null;
  products: Product[];
  orders: Order[];
  cart: CartItem[];
  
  // Actions
  setUser: (user: User | null) => void;
  setProducts: (products: Product[]) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  products: [],
  orders: [],
  cart: [],
  
  setUser: (user) => set({ user }),
  setProducts: (products) => set({ products }),
  addToCart: (product) => set((state) => ({
    cart: [...state.cart, { product, quantity: 1 }]
  })),
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.product.id !== productId)
  })),
  clearCart: () => set({ cart: [] }),
}));
```

#### 3.4 Real-time Features (3 hours)

**Firestore Real-time Listeners**
```typescript
// hooks/useRealtimeOrders.ts
import { onSnapshot, query, where } from 'firebase/firestore';

export function useRealtimeOrders(userId: string) {
  const [orders, setOrders] = useState<Order[]>([]);
  
  useEffect(() => {
    const q = query(
      collection(firestore, 'orders'),
      where('buyerId', '==', userId)
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const orderList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Order[];
      
      setOrders(orderList);
    });
    
    return unsubscribe;
  }, [userId]);
  
  return orders;
}
```

---

### Phase 4: Integration & Testing (4 hours)

#### 4.1 End-to-End Testing (2 hours)

**Test Scenarios:**
1. User registration and authentication
2. Product creation and listing
3. Order placement and payment
4. Escrow creation and completion
5. Real-time updates and notifications

#### 4.2 Performance Optimization (1 hour)

**Key Optimizations:**
- Image lazy loading and optimization
- Firebase query optimization
- Caching strategies
- Bundle size optimization

#### 4.3 Security Testing (1 hour)

**Security Checklist:**
- Firestore security rules validation
- XRPL wallet security
- API endpoint security
- Input validation and sanitization

---

## 5. Core XRPL Implementation Details

### 5.1 TokenEscrow Implementation

#### EscrowCreate Transaction
```typescript
// lib/xrpl/escrow.ts
import { 
  Client, 
  Wallet, 
  EscrowCreate, 
  EscrowFinish, 
  convertStringToHex,
  convertHexToString 
} from 'xrpl';

export class XRPLEscrowManager {
  private client: Client;
  
  constructor(serverUrl: string = 'wss://s.altnet.rippletest.net:51233') {
    this.client = new Client(serverUrl);
  }
  
  async connect(): Promise<void> {
    if (!this.client.isConnected()) {
      await this.client.connect();
    }
  }
  
  async disconnect(): Promise<void> {
    if (this.client.isConnected()) {
      await this.client.disconnect();
    }
  }
  
  /**
   * Creates an escrow transaction on XRPL
   * @param buyerWallet - Buyer's XRPL wallet
   * @param sellerAddress - Seller's XRPL address
   * @param amount - Amount in XRP
   * @param orderId - Order ID for memo
   * @param condition - Escrow condition hash
   * @param finishAfter - Unix timestamp when escrow can be finished
   */
  async createEscrow(
    buyerWallet: Wallet,
    sellerAddress: string,
    amount: number,
    orderId: string,
    condition: string,
    finishAfter?: number
  ): Promise<{
    success: boolean;
    transactionHash?: string;
    escrowSequence?: number;
    error?: string;
  }> {
    try {
      await this.connect();
      
      // Convert amount to drops (1 XRP = 1,000,000 drops)
      const amountInDrops = Math.floor(amount * 1000000).toString();
      
      // Create escrow transaction with order memo
      const escrowTx: EscrowCreate = {
        TransactionType: 'EscrowCreate',
        Account: buyerWallet.address,
        Destination: sellerAddress,
        Amount: amountInDrops,
        Condition: condition,
        Memos: [{
          Memo: {
            MemoType: convertStringToHex('order'),
            MemoData: convertStringToHex(orderId),
            MemoFormat: convertStringToHex('text/plain')
          }
        }]
      };
      
      // Add FinishAfter if provided (for time-based escrow)
      if (finishAfter) {
        escrowTx.FinishAfter = finishAfter;
      }
      
      // Prepare and sign transaction
      const preparedTx = await this.client.autofill(escrowTx);
      const signedTx = buyerWallet.sign(preparedTx);
      
      // Submit transaction and wait for validation
      const result = await this.client.submitAndWait(signedTx.tx_blob);
      
      if (result.result.meta?.TransactionResult === 'tesSUCCESS') {
        return {
          success: true,
          transactionHash: result.result.hash,
          escrowSequence: result.result.Sequence
        };
      } else {
        return {
          success: false,
          error: `Transaction failed: ${result.result.meta?.TransactionResult}`
        };
      }
    } catch (error) {
      console.error('Escrow creation failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    } finally {
      await this.disconnect();
    }
  }
  
  /**
   * Finishes an escrow transaction
   * @param wallet - Wallet to finish escrow (buyer or seller)
   * @param escrowOwner - Original escrow creator address
   * @param escrowSequence - Escrow sequence number
   * @param fulfillment - Condition fulfillment
   */
  async finishEscrow(
    wallet: Wallet,
    escrowOwner: string,
    escrowSequence: number,
    fulfillment: string
  ): Promise<{
    success: boolean;
    transactionHash?: string;
    error?: string;
  }> {
    try {
      await this.connect();
      
      const finishTx: EscrowFinish = {
        TransactionType: 'EscrowFinish',
        Account: wallet.address,
        Owner: escrowOwner,
        OfferSequence: escrowSequence,
        Condition: '', // Will be filled automatically
        Fulfillment: fulfillment
      };
      
      const preparedTx = await this.client.autofill(finishTx);
      const signedTx = wallet.sign(preparedTx);
      const result = await this.client.submitAndWait(signedTx.tx_blob);
      
      if (result.result.meta?.TransactionResult === 'tesSUCCESS') {
        return {
          success: true,
          transactionHash: result.result.hash
        };
      } else {
        return {
          success: false,
          error: `Transaction failed: ${result.result.meta?.TransactionResult}`
        };
      }
    } catch (error) {
      console.error('Escrow finish failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    } finally {
      await this.disconnect();
    }
  }
}
```

#### Escrow Condition Generation
```typescript
// lib/xrpl/conditions.ts
import { createHash, randomBytes } from 'crypto';

export class EscrowConditionManager {
  /**
   * Generates a random fulfillment and its corresponding condition
   * Used for simple escrow mechanisms
   */
  static generateSimpleCondition(): {
    fulfillment: string;
    condition: string;
  } {
    // Generate random 32-byte fulfillment
    const fulfillment = randomBytes(32);
    
    // Create SHA-256 hash of fulfillment as condition
    const condition = createHash('sha256')
      .update(fulfillment)
      .digest('hex')
      .toUpperCase();
    
    return {
      fulfillment: fulfillment.toString('hex').toUpperCase(),
      condition
    };
  }
  
  /**
   * Generates a delivery-based condition
   * Condition is met when delivery is confirmed
   */
  static generateDeliveryCondition(orderId: string, deliveryCode: string): {
    fulfillment: string;
    condition: string;
  } {
    const combinedSecret = `${orderId}:${deliveryCode}:${Date.now()}`;
    const fulfillment = createHash('sha256')
      .update(combinedSecret)
      .digest('hex')
      .toUpperCase();
    
    const condition = createHash('sha256')
      .update(Buffer.from(fulfillment, 'hex'))
      .digest('hex')
      .toUpperCase();
    
    return { fulfillment, condition };
  }
  
  /**
   * Validates if a fulfillment matches a condition
   */
  static validateFulfillment(fulfillment: string, condition: string): boolean {
    try {
      const calculatedCondition = createHash('sha256')
        .update(Buffer.from(fulfillment, 'hex'))
        .digest('hex')
        .toUpperCase();
      
      return calculatedCondition === condition.toUpperCase();
    } catch (error) {
      console.error('Fulfillment validation failed:', error);
      return false;
    }
  }
}
```

### 5.2 Credentials Implementation

#### On-Chain Credential Query
```typescript
// lib/xrpl/credentials.ts
import { Client, AccountObjectsRequest, LedgerEntry } from 'xrpl';

export interface UserCredential {
  type: 'verification' | 'reputation' | 'transaction_history';
  issuer: string;
  subject: string;
  data: any;
  issuedAt: number;
  expiresAt?: number;
  signature: string;
}

export class XRPLCredentialManager {
  private client: Client;
  
  constructor(serverUrl: string = 'wss://s.altnet.rippletest.net:51233') {
    this.client = new Client(serverUrl);
  }
  
  /**
   * Queries on-chain credentials for a user
   * @param userAddress - XRPL address to query credentials for
   */
  async getUserCredentials(userAddress: string): Promise<UserCredential[]> {
    try {
      await this.client.connect();
      
      // Query account objects to find credential-related objects
      const accountObjectsRequest: AccountObjectsRequest = {
        command: 'account_objects',
        account: userAddress,
        type: 'state' // Looking for state objects that might contain credentials
      };
      
      const response = await this.client.request(accountObjectsRequest);
      const credentials: UserCredential[] = [];
      
      // Parse account objects for credential data
      for (const obj of response.result.account_objects) {
        if (this.isCredentialObject(obj)) {
          const credential = this.parseCredentialFromObject(obj);
          if (credential) {
            credentials.push(credential);
          }
        }
      }
      
      // Also check transaction history for credential issuance
      const txCredentials = await this.getCredentialsFromTransactionHistory(userAddress);
      credentials.push(...txCredentials);
      
      await this.client.disconnect();
      return credentials;
      
    } catch (error) {
      console.error('Failed to query user credentials:', error);
      await this.client.disconnect();
      return [];
    }
  }
  
  /**
   * Gets reputation score from on-chain transaction history
   */
  async getReputationScore(userAddress: string): Promise<{
    score: number;
    totalTransactions: number;
    successfulTransactions: number;
    averageRating: number;
  }> {
    try {
      await this.client.connect();
      
      // Query account transaction history
      const transactions = await this.client.request({
        command: 'account_tx',
        account: userAddress,
        limit: 200 // Limit for PoC, in production would paginate
      });
      
      let totalTransactions = 0;
      let successfulTransactions = 0;
      let totalRating = 0;
      let ratingCount = 0;
      
      for (const tx of transactions.result.transactions) {
        const transaction = tx.tx;
        
        // Check if this is a marketplace-related transaction
        if (this.isMarketplaceTransaction(transaction)) {
          totalTransactions++;
          
          if (tx.meta?.TransactionResult === 'tesSUCCESS') {
            successfulTransactions++;
            
            // Extract rating from memo if present
            const rating = this.extractRatingFromMemo(transaction);
            if (rating) {
              totalRating += rating;
              ratingCount++;
            }
          }
        }
      }
      
      const averageRating = ratingCount > 0 ? totalRating / ratingCount : 0;
      const successRate = totalTransactions > 0 ? successfulTransactions / totalTransactions : 0;
      const score = Math.min(100, Math.round((successRate * 50) + (averageRating * 10)));
      
      await this.client.disconnect();
      
      return {
        score,
        totalTransactions,
        successfulTransactions,
        averageRating
      };
      
    } catch (error) {
      console.error('Failed to calculate reputation score:', error);
      await this.client.disconnect();
      return {
        score: 0,
        totalTransactions: 0,
        successfulTransactions: 0,
        averageRating: 0
      };
    }
  }
  
  private isCredentialObject(obj: LedgerEntry): boolean {
    // Implementation depends on how credentials are stored
    // This is a simplified check
    return obj.LedgerEntryType === 'RippleState' && 
           'credential' in (obj as any).memo;
  }
  
  private parseCredentialFromObject(obj: LedgerEntry): UserCredential | null {
    // Parse credential data from ledger object
    // Implementation depends on credential format
    try {
      const credentialData = (obj as any).memo?.credential;
      if (credentialData) {
        return JSON.parse(Buffer.from(credentialData, 'hex').toString());
      }
    } catch (error) {
      console.error('Failed to parse credential:', error);
    }
    return null;
  }
  
  private async getCredentialsFromTransactionHistory(userAddress: string): Promise<UserCredential[]> {
    // Query transaction memos for credential issuance records
    const credentials: UserCredential[] = [];
    
    const transactions = await this.client.request({
      command: 'account_tx',
      account: userAddress,
      limit: 100
    });
    
    for (const tx of transactions.result.transactions) {
      const transaction = tx.tx;
      if (transaction.Memos) {
        for (const memo of transaction.Memos) {
          if (memo.Memo?.MemoType === convertStringToHex('credential')) {
            try {
              const credentialData = JSON.parse(
                convertHexToString(memo.Memo.MemoData || '')
              );
              credentials.push(credentialData);
            } catch (error) {
              // Skip invalid credential data
            }
          }
        }
      }
    }
    
    return credentials;
  }
  
  private isMarketplaceTransaction(transaction: any): boolean {
    // Check if transaction is related to our marketplace
    if (transaction.Memos) {
      for (const memo of transaction.Memos) {
        if (memo.Memo?.MemoType === convertStringToHex('order') ||
            memo.Memo?.MemoType === convertStringToHex('marketplace')) {
          return true;
        }
      }
    }
    return false;
  }
  
  private extractRatingFromMemo(transaction: any): number | null {
    if (transaction.Memos) {
      for (const memo of transaction.Memos) {
        if (memo.Memo?.MemoType === convertStringToHex('rating')) {
          try {
            const rating = parseInt(convertHexToString(memo.Memo.MemoData || ''));
            return isNaN(rating) ? null : Math.max(1, Math.min(5, rating));
          } catch (error) {
            return null;
          }
        }
      }
    }
    return null;
  }
}
```

### 5.3 Batch Implementation

#### Atomic Transaction Bundling
```typescript
// lib/xrpl/batch.ts
import { Client, Wallet, Transaction, convertStringToHex } from 'xrpl';

export interface BatchOperation {
  type: 'escrow_create' | 'payment' | 'memo';
  data: any;
}

export class XRPLBatchManager {
  private client: Client;
  
  constructor(serverUrl: string = 'wss://s.altnet.rippletest.net:51233') {
    this.client = new Client(serverUrl);
  }
  
  /**
   * Creates an atomic batch transaction with escrow and order memo
   * @param wallet - Wallet to execute transactions
   * @param operations - Array of operations to batch
   */
  async executeBatch(
    wallet: Wallet,
    operations: BatchOperation[]
  ): Promise<{
    success: boolean;
    transactions: string[];
    error?: string;
  }> {
    try {
      await this.client.connect();
      
      const transactions: string[] = [];
      
      // For XRPL, we need to simulate atomic transactions
      // by using sequence numbers and careful ordering
      const accountInfo = await this.client.request({
        command: 'account_info',
        account: wallet.address
      });
      
      let sequence = accountInfo.result.account_data.Sequence;
      const preparedTxs: { tx: Transaction; signed: any }[] = [];
      
      // Prepare all transactions with consecutive sequence numbers
      for (const operation of operations) {
        const tx = await this.createTransactionForOperation(operation, wallet.address, sequence);
        const preparedTx = await this.client.autofill(tx);
        const signedTx = wallet.sign(preparedTx);
        
        preparedTxs.push({ tx: preparedTx, signed: signedTx });
        sequence++;
      }
      
      // Submit all transactions in sequence
      const results = [];
      for (const { signed } of preparedTxs) {
        const result = await this.client.submitAndWait(signed.tx_blob);
        results.push(result);
        transactions.push(result.result.hash);
        
        // If any transaction fails, the batch fails
        if (result.result.meta?.TransactionResult !== 'tesSUCCESS') {
          throw new Error(`Batch transaction failed: ${result.result.meta?.TransactionResult}`);
        }
      }
      
      await this.client.disconnect();
      
      return {
        success: true,
        transactions
      };
      
    } catch (error) {
      console.error('Batch execution failed:', error);
      await this.client.disconnect();
      
      return {
        success: false,
        transactions: [],
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
  
  /**
   * Creates an escrow with order memo in a single transaction
   */
  async createEscrowWithMemo(
    buyerWallet: Wallet,
    sellerAddress: string,
    amount: number,
    condition: string,
    orderId: string,
    orderData: any
  ): Promise<{
    success: boolean;
    transactionHash?: string;
    escrowSequence?: number;
    error?: string;
  }> {
    try {
      await this.client.connect();
      
      const amountInDrops = Math.floor(amount * 1000000).toString();
      
      // Create escrow transaction with comprehensive order memo
      const escrowTx: any = {
        TransactionType: 'EscrowCreate',
        Account: buyerWallet.address,
        Destination: sellerAddress,
        Amount: amountInDrops,
        Condition: condition,
        Memos: [
          {
            Memo: {
              MemoType: convertStringToHex('order_id'),
              MemoData: convertStringToHex(orderId),
              MemoFormat: convertStringToHex('text/plain')
            }
          },
          {
            Memo: {
              MemoType: convertStringToHex('order_data'),
              MemoData: convertStringToHex(JSON.stringify(orderData)),
              MemoFormat: convertStringToHex('application/json')
            }
          },
          {
            Memo: {
              MemoType: convertStringToHex('marketplace'),
              MemoData: convertStringToHex('swift_market'),
              MemoFormat: convertStringToHex('text/plain')
            }
          }
        ]
      };
      
      const preparedTx = await this.client.autofill(escrowTx);
      const signedTx = buyerWallet.sign(preparedTx);
      const result = await this.client.submitAndWait(signedTx.tx_blob);
      
      await this.client.disconnect();
      
      if (result.result.meta?.TransactionResult === 'tesSUCCESS') {
        return {
          success: true,
          transactionHash: result.result.hash,
          escrowSequence: result.result.Sequence
        };
      } else {
        return {
          success: false,
          error: `Transaction failed: ${result.result.meta?.TransactionResult}`
        };
      }
      
    } catch (error) {
      console.error('Escrow with memo failed:', error);
      await this.client.disconnect();
      
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
  
  private async createTransactionForOperation(
    operation: BatchOperation,
    accountAddress: string,
    sequence: number
  ): Promise<Transaction> {
    switch (operation.type) {
      case 'escrow_create':
        return {
          TransactionType: 'EscrowCreate',
          Account: accountAddress,
          Sequence: sequence,
          ...operation.data
        } as Transaction;
        
      case 'payment':
        return {
          TransactionType: 'Payment',
          Account: accountAddress,
          Sequence: sequence,
          ...operation.data
        } as Transaction;
        
      case 'memo':
        // Create a minimal payment with memo for data storage
        return {
          TransactionType: 'Payment',
          Account: accountAddress,
          Destination: accountAddress,
          Amount: '1', // 1 drop to self
          Sequence: sequence,
          Memos: operation.data.memos
        } as Transaction;
        
      default:
        throw new Error(`Unsupported operation type: ${operation.type}`);
    }
  }
}
```

### 5.4 Key Connection: Authenticated User Wallet Integration

#### Firebase Functions with Privy Authentication
```typescript
// functions/src/auth-wallet.ts
import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { PrivyApi } from '@privy-io/server-auth';
import { Wallet } from 'xrpl';

const privy = new PrivyApi({
  appId: process.env.PRIVY_APP_ID!,
  appSecret: process.env.PRIVY_APP_SECRET!,
});

/**
 * Securely extracts wallet address from authenticated Privy token
 * This is the key connection between Privy auth and XRPL transactions
 */
export async function getAuthenticatedWalletAddress(authToken: string): Promise<{
  walletAddress: string;
  privyUserId: string;
}> {
  try {
    // Verify Privy token and extract user data
    const privyUser = await privy.verifyAuthToken(authToken);
    
    if (!privyUser) {
      throw new HttpsError('unauthenticated', 'Invalid authentication token');
    }
    
    // Extract wallet address from Privy user data
    const embeddedWallet = privyUser.linkedAccounts?.find(
      account => account.type === 'wallet'
    );
    
    if (!embeddedWallet?.address) {
      throw new HttpsError('failed-precondition', 'No wallet found for user');
    }
    
    return {
      walletAddress: embeddedWallet.address,
      privyUserId: privyUser.id
    };
    
  } catch (error) {
    console.error('Failed to get authenticated wallet address:', error);
    throw new HttpsError('internal', 'Authentication verification failed');
  }
}

/**
 * Creates XRPL escrow using authenticated user's wallet address
 */
export const createAuthenticatedEscrow = onCall(async (request) => {
  if (!request.auth?.token) {
    throw new HttpsError('unauthenticated', 'Authentication required');
  }
  
  const { orderId, sellerAddress, amount, condition } = request.data;
  
  try {
    // Get authenticated user's wallet address from Privy token
    const { walletAddress, privyUserId } = await getAuthenticatedWalletAddress(
      request.auth.token
    );
    
    // Verify this user is the buyer for this order
    const orderDoc = await firestore.collection('orders').doc(orderId).get();
    const orderData = orderDoc.data();
    
    if (!orderData) {
      throw new HttpsError('not-found', 'Order not found');
    }
    
    // Check if the authenticated user is the buyer
    if (orderData.buyerId !== request.auth.uid) {
      throw new HttpsError('permission-denied', 'Not authorized for this order');
    }
    
    // Get wallet from secure storage using the authenticated address
    const buyerWallet = await getWalletFromSecureStorage(walletAddress);
    
    // Create escrow with order memo
    const escrowManager = new XRPLEscrowManager();
    const result = await escrowManager.createEscrow(
      buyerWallet,
      sellerAddress,
      amount,
      orderId,
      condition
    );
    
    if (result.success) {
      // Update order with escrow details
      await orderDoc.ref.update({
        'escrow.escrowId': result.escrowSequence,
        'escrow.condition': condition,
        'escrow.createdAt': new Date(),
        'payment.transactionHash': result.transactionHash,
        'payment.paidAt': new Date(),
        status: 'paid'
      });
      
      return {
        success: true,
        transactionHash: result.transactionHash,
        escrowSequence: result.escrowSequence
      };
    } else {
      throw new HttpsError('internal', `Escrow creation failed: ${result.error}`);
    }
    
  } catch (error) {
    console.error('Authenticated escrow creation failed:', error);
    throw new HttpsError('internal', 'Escrow creation failed');
  }
});

/**
 * Finishes escrow using authenticated user's wallet
 */
export const finishAuthenticatedEscrow = onCall(async (request) => {
  if (!request.auth?.token) {
    throw new HttpsError('unauthenticated', 'Authentication required');
  }
  
  const { orderId, fulfillment } = request.data;
  
  try {
    // Get authenticated user's wallet address
    const { walletAddress } = await getAuthenticatedWalletAddress(
      request.auth.token
    );
    
    // Get order details
    const orderDoc = await firestore.collection('orders').doc(orderId).get();
    const orderData = orderDoc.data();
    
    if (!orderData) {
      throw new HttpsError('not-found', 'Order not found');
    }
    
    // Check if user is authorized (buyer or seller)
    if (orderData.buyerId !== request.auth.uid && 
        orderData.sellerId !== request.auth.uid) {
      throw new HttpsError('permission-denied', 'Not authorized for this order');
    }
    
    // Get wallet and finish escrow
    const wallet = await getWalletFromSecureStorage(walletAddress);
    const escrowManager = new XRPLEscrowManager();
    
    const result = await escrowManager.finishEscrow(
      wallet,
      orderData.buyerWalletAddress, // Original escrow creator
      orderData.escrow.escrowId,
      fulfillment
    );
    
    if (result.success) {
      // Update order status
      await orderDoc.ref.update({
        'escrow.finishedAt': new Date(),
        'escrow.fulfillment': fulfillment,
        status: 'completed',
        completedAt: new Date()
      });
      
      return {
        success: true,
        transactionHash: result.transactionHash
      };
    } else {
      throw new HttpsError('internal', `Escrow finish failed: ${result.error}`);
    }
    
  } catch (error) {
    console.error('Authenticated escrow finish failed:', error);
    throw new HttpsError('internal', 'Escrow finish failed');
  }
});

/**
 * Securely retrieves wallet from Firebase Secret Manager
 * In production, use proper key management service
 */
async function getWalletFromSecureStorage(walletAddress: string): Promise<Wallet> {
  try {
    // In production, use Firebase Secret Manager or AWS KMS
    // For PoC, store encrypted private keys in Firestore with proper security rules
    const walletDoc = await firestore
      .collection('secure_wallets')
      .doc(walletAddress)
      .get();
    
    const walletData = walletDoc.data();
    if (!walletData?.encryptedPrivateKey) {
      throw new Error('Wallet private key not found');
    }
    
    // Decrypt private key (implement proper encryption/decryption)
    const privateKey = decryptPrivateKey(walletData.encryptedPrivateKey);
    
    return Wallet.fromSeed(privateKey);
    
  } catch (error) {
    console.error('Failed to retrieve wallet from secure storage:', error);
    throw new Error('Wallet access failed');
  }
}

/**
 * Decrypts private key using secure encryption
 * Implement using proper encryption library in production
 */
function decryptPrivateKey(encryptedKey: string): string {
  // Implementation depends on encryption method used
  // Use libraries like node-forge, crypto-js, or native crypto
  // This is a placeholder - implement proper decryption
  return encryptedKey; // PLACEHOLDER - DO NOT USE IN PRODUCTION
}
```

This implementation provides the crucial connection between Privy authentication and XRPL wallet operations, ensuring that:

1. **Authentication Verification**: Every XRPL operation verifies the Privy token
2. **Wallet Address Extraction**: Securely extracts the user's wallet address from their Privy account
3. **Authorization Checks**: Ensures users can only operate on their own transactions
4. **Secure Key Management**: Demonstrates how to securely store and retrieve private keys
5. **Order Verification**: Links XRPL transactions to specific marketplace orders

---

## 6. Security & DevOps Best Practices

### 6.1 Security Implementation

#### Firestore Security Rules
```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isOwner(resource) {
      return isAuthenticated() && request.auth.uid == resource.data.userId;
    }
    
    function isOrderParticipant(resource) {
      return isAuthenticated() && 
        (request.auth.uid == resource.data.buyerId || 
         request.auth.uid == resource.data.sellerId);
    }
    
    // Users collection - public read, owner write
    match /users/{userId} {
      allow read: if true; // Public profiles for marketplace trust
      allow write: if isAuthenticated() && request.auth.uid == userId;
      
      // Prevent sensitive data exposure
      allow read: if resource.data.privacy.publicProfile == true ||
                     request.auth.uid == userId;
    }
    
    // Products collection - public read, owner write
    match /products/{productId} {
      allow read: if resource.data.status == 'active';
      allow create: if isAuthenticated() && 
                      request.auth.uid == request.resource.data.sellerId;
      allow update: if isAuthenticated() && 
                      request.auth.uid == resource.data.sellerId;
      allow delete: if isAuthenticated() && 
                      request.auth.uid == resource.data.sellerId;
    }
    
    // Orders collection - participant access only
    match /orders/{orderId} {
      allow read: if isOrderParticipant(resource);
      allow create: if isAuthenticated() && 
                      request.auth.uid == request.resource.data.buyerId;
      allow update: if isOrderParticipant(resource) &&
                      validateOrderUpdate();
    }
    
    // Secure wallets collection - strict access control
    match /secure_wallets/{walletAddress} {
      allow read, write: if false; // Only server-side access
    }
    
    // Validation functions
    function validateOrderUpdate() {
      let allowedStatusTransitions = {
        'pending': ['paid', 'cancelled'],
        'paid': ['processing', 'disputed'],
        'processing': ['shipped', 'disputed'],
        'shipped': ['delivered', 'disputed'],
        'delivered': ['completed', 'disputed'],
        'disputed': ['completed', 'refunded']
      };
      
      return request.resource.data.status in 
             allowedStatusTransitions[resource.data.status];
    }
  }
}
```

#### XRPL Secret Management with Firebase Secret Manager
```typescript
// functions/src/security/secrets.ts
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

export class SecretManager {
  private client: SecretManagerServiceClient;
  private projectId: string;
  
  constructor() {
    this.client = new SecretManagerServiceClient();
    this.projectId = process.env.GOOGLE_CLOUD_PROJECT!;
  }
  
  /**
   * Stores wallet private key securely
   */
  async storeWalletSecret(
    walletAddress: string, 
    privateKey: string
  ): Promise<void> {
    const secretId = `wallet-${walletAddress.toLowerCase()}`;
    
    try {
      // Encrypt private key before storing
      const encryptedKey = await this.encryptPrivateKey(privateKey);
      
      const [secret] = await this.client.createSecret({
        parent: `projects/${this.projectId}`,
        secretId,
        secret: {
          replication: {
            automatic: {},
          },
        },
      });
      
      await this.client.addSecretVersion({
        parent: secret.name,
        payload: {
          data: Buffer.from(encryptedKey),
        },
      });
      
      console.log(`Wallet secret stored for ${walletAddress}`);
      
    } catch (error) {
      console.error('Failed to store wallet secret:', error);
      throw new Error('Secret storage failed');
    }
  }
  
  /**
   * Retrieves wallet private key securely
   */
  async getWalletSecret(walletAddress: string): Promise<string> {
    const secretId = `wallet-${walletAddress.toLowerCase()}`;
    
    try {
      const [version] = await this.client.accessSecretVersion({
        name: `projects/${this.projectId}/secrets/${secretId}/versions/latest`,
      });
      
      const encryptedKey = version.payload?.data?.toString();
      if (!encryptedKey) {
        throw new Error('Secret not found');
      }
      
      // Decrypt private key
      const privateKey = await this.decryptPrivateKey(encryptedKey);
      return privateKey;
      
    } catch (error) {
      console.error('Failed to retrieve wallet secret:', error);
      throw new Error('Secret retrieval failed');
    }
  }
  
  private async encryptPrivateKey(privateKey: string): Promise<string> {
    // Use Firebase's built-in encryption or implement AES-256-GCM
    const { encrypt } = await import('crypto');
    const algorithm = 'aes-256-gcm';
    const key = process.env.ENCRYPTION_KEY!; // Store in environment
    
    const iv = Buffer.from(randomBytes(16));
    const cipher = createCipher(algorithm, key);
    
    let encrypted = cipher.update(privateKey, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    return `${iv.toString('hex')}:${encrypted}`;
  }
  
  private async decryptPrivateKey(encryptedKey: string): Promise<string> {
    const [ivHex, encrypted] = encryptedKey.split(':');
    const algorithm = 'aes-256-gcm';
    const key = process.env.ENCRYPTION_KEY!;
    
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = createDecipher(algorithm, key);
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  }
}
```

#### Rate Limiting and API Security
```typescript
// functions/src/middleware/security.ts
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

export const securityMiddleware = [
  // Helmet for security headers
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true
    }
  }),
  
  // Rate limiting
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
      error: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
  }),
  
  // XRPL-specific rate limiting (more restrictive)
  rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 10, // Limit XRPL operations
    skip: (req) => !req.path.includes('/xrpl/'),
    message: {
      error: 'Too many blockchain operations, please wait before trying again.'
    }
  })
];

// Input validation middleware
export function validateInput(schema: any) {
  return (req: any, res: any, next: any) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Invalid input',
        details: error.details
      });
    }
    next();
  };
}
```

### 6.2 DevOps Best Practices

#### GitHub Actions CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy Swift Market

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  NODE_VERSION: '18'
  FIREBASE_PROJECT_ID: 'swift-market-poc'

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ env.NODE_VERSION }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run type check
      run: npm run type-check
    
    - name: Run unit tests
      run: npm run test
      env:
        CI: true
    
    - name: Run security audit
      run: npm audit --audit-level moderate

  build:
    needs: test
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ env.NODE_VERSION }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
      env:
        NEXT_PUBLIC_PRIVY_APP_ID: ${{ secrets.PRIVY_APP_ID }}
        NEXT_PUBLIC_FIREBASE_CONFIG: ${{ secrets.FIREBASE_CONFIG }}
    
    - name: Upload build artifacts
      uses: actions/upload-artifact@v3
      with:
        name: build-files
        path: .next/

  deploy-staging:
    needs: [test, build]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/develop'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ env.NODE_VERSION }}
        cache: 'npm'
    
    - name: Install Firebase CLI
      run: npm install -g firebase-tools
    
    - name: Deploy to Firebase Staging
      run: firebase deploy --only hosting:staging,functions --project ${{ env.FIREBASE_PROJECT_ID }}
      env:
        FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}

  deploy-production:
    needs: [test, build]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ env.NODE_VERSION }}
        cache: 'npm'
    
    - name: Install Firebase CLI
      run: npm install -g firebase-tools
    
    - name: Deploy to Firebase Production
      run: firebase deploy --only hosting:production,functions --project ${{ env.FIREBASE_PROJECT_ID }}
      env:
        FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
    
    - name: Run E2E tests on production
      run: npm run test:e2e
      env:
        BASE_URL: https://swift-market-poc.web.app
        CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}

  security-scan:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Run CodeQL Analysis
      uses: github/codeql-action/init@v2
      with:
        languages: javascript, typescript
    
    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v2
    
    - name: Run OWASP ZAP Security Scan
      uses: zaproxy/action-baseline@v0.7.0
      with:
        target: 'https://swift-market-poc.web.app'
```

#### Environment Configuration
```typescript
// scripts/setup-environment.ts
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

async function setupEnvironment() {
  const environment = process.env.NODE_ENV || 'development';
  
  console.log(`Setting up ${environment} environment...`);
  
  // Initialize Firebase Admin
  const app = initializeApp({
    projectId: process.env.FIREBASE_PROJECT_ID,
  });
  
  const db = getFirestore(app);
  
  // Create initial collections and indexes
  await createFirestoreIndexes(db);
  await seedInitialData(db);
  
  console.log('Environment setup complete!');
}

async function createFirestoreIndexes(db: any) {
  // Note: Firestore indexes are typically created via firebase CLI
  // This function documents the required indexes
  
  const requiredIndexes = [
    {
      collection: 'products',
      fields: ['sellerId', 'status', 'createdAt']
    },
    {
      collection: 'orders', 
      fields: ['buyerId', 'status', 'createdAt']
    },
    {
      collection: 'users',
      fields: ['reputation', 'totalTransactions']
    }
  ];
  
  console.log('Required Firestore indexes:', requiredIndexes);
}

async function seedInitialData(db: any) {
  // Seed development data if needed
  if (process.env.NODE_ENV === 'development') {
    // Add sample products, users, etc.
  }
}
```

#### Monitoring and Logging
```typescript
// functions/src/monitoring/logger.ts
import { getFirestore } from 'firebase-admin/firestore';

export class Logger {
  private static db = getFirestore();
  
  static async logTransaction(
    type: 'escrow_create' | 'escrow_finish' | 'order_update',
    userId: string,
    data: any,
    success: boolean,
    error?: string
  ) {
    await this.db.collection('transaction_logs').add({
      type,
      userId,
      data,
      success,
      error,
      timestamp: new Date(),
      environment: process.env.NODE_ENV
    });
  }
  
  static async logError(
    context: string,
    error: Error,
    userId?: string,
    additionalData?: any
  ) {
    await this.db.collection('error_logs').add({
      context,
      message: error.message,
      stack: error.stack,
      userId,
      additionalData,
      timestamp: new Date(),
      environment: process.env.NODE_ENV
    });
  }
  
  static async logUserActivity(
    userId: string,
    action: string,
    metadata?: any
  ) {
    await this.db.collection('user_activity').add({
      userId,
      action,
      metadata,
      timestamp: new Date(),
      userAgent: metadata?.userAgent,
      ipAddress: metadata?.ipAddress
    });
  }
}
```

---

## 7. Final PoC Checklist

### 7.1 Core Functionality ✅

#### Authentication & User Management
- [ ] **Privy Integration**: Social login and embedded wallet creation working
- [ ] **User Profiles**: Complete user registration and profile management
- [ ] **Wallet Connection**: XRPL wallet addresses linked to user accounts
- [ ] **Authentication Middleware**: Secure token verification in Firebase Functions

#### Product Management
- [ ] **Product Listing**: Users can create and list products for sale
- [ ] **Product Search**: Category, location, and price-based filtering
- [ ] **Product Details**: Comprehensive product information display
- [ ] **Image Upload**: Product image storage and optimization

#### Order & Payment Processing
- [ ] **Order Creation**: Buyers can place orders on products
- [ ] **XRPL Escrow**: Automatic escrow creation with payment
- [ ] **Order Status Tracking**: Real-time order status updates
- [ ] **Escrow Completion**: Secure fund release upon delivery confirmation

#### XRPL Integration
- [ ] **Testnet Connection**: Stable connection to XRPL Testnet
- [ ] **Transaction Processing**: Create and finish escrow transactions
- [ ] **Memo Handling**: Order data embedded in transaction memos
- [ ] **Credential Querying**: On-chain reputation and transaction history

### 7.2 Technical Implementation ✅

#### Frontend (Next.js)
- [ ] **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- [ ] **Real-time Updates**: Live order status updates via Firestore
- [ ] **State Management**: Clean state management with Zustand
- [ ] **Error Handling**: Comprehensive error handling and user feedback

#### Backend (Firebase Functions)
- [ ] **API Endpoints**: All core API functions implemented and tested
- [ ] **Data Validation**: Input validation and sanitization
- [ ] **Rate Limiting**: API protection against abuse
- [ ] **Logging**: Comprehensive logging for monitoring and debugging

#### Database (Firestore)
- [ ] **Data Models**: All collections and interfaces implemented
- [ ] **Security Rules**: Proper access control and data protection
- [ ] **Indexes**: Optimized queries with composite indexes
- [ ] **Real-time Sync**: Live data synchronization across clients

### 7.3 Security & Performance ✅

#### Security Measures
- [ ] **Private Key Management**: Secure storage using Firebase Secret Manager
- [ ] **Authentication Verification**: All sensitive operations require auth
- [ ] **Input Validation**: All user inputs validated and sanitized
- [ ] **Security Headers**: Proper HTTP security headers implemented

#### Performance Optimization
- [ ] **Image Optimization**: Compressed and optimized image delivery
- [ ] **Query Optimization**: Efficient Firestore queries with proper indexing
- [ ] **Caching**: Strategic caching for improved performance
- [ ] **Bundle Optimization**: Minimized JavaScript bundle sizes

### 7.4 Testing & Quality Assurance ✅

#### Test Coverage
- [ ] **Unit Tests**: Core functions have unit test coverage
- [ ] **Integration Tests**: API endpoints tested with realistic data
- [ ] **E2E Tests**: Complete user workflows tested end-to-end
- [ ] **Security Tests**: Vulnerability scanning and penetration testing

#### Code Quality
- [ ] **TypeScript**: Full type safety implementation
- [ ] **Linting**: ESLint configuration and compliance
- [ ] **Code Formatting**: Prettier code formatting consistency
- [ ] **Documentation**: Comprehensive code documentation

### 7.5 DevOps & Deployment ✅

#### CI/CD Pipeline
- [ ] **GitHub Actions**: Automated testing and deployment pipeline
- [ ] **Environment Management**: Proper staging and production environments
- [ ] **Secret Management**: Secure handling of API keys and secrets
- [ ] **Monitoring**: Error tracking and performance monitoring

#### Production Readiness
- [ ] **Environment Variables**: All configuration externalized
- [ ] **Error Logging**: Comprehensive error tracking and alerting
- [ ] **Performance Monitoring**: Application performance monitoring
- [ ] **Backup Strategy**: Data backup and recovery procedures

### 7.6 User Experience ✅

#### Core User Journeys
- [ ] **New User Onboarding**: Smooth registration and wallet creation
- [ ] **Product Discovery**: Easy product search and browsing
- [ ] **Purchase Flow**: Intuitive buying process with clear status updates
- [ ] **Seller Experience**: Simple product listing and order management

#### Accessibility & Usability
- [ ] **Mobile Responsive**: Full functionality on mobile devices
- [ ] **Loading States**: Clear loading indicators throughout the app
- [ ] **Error States**: Helpful error messages and recovery options
- [ ] **Accessibility**: Basic accessibility compliance (WCAG 2.1 AA)

### 7.7 Business Logic Validation ✅

#### Marketplace Mechanics
- [ ] **Fee Structure**: Platform fee calculation and collection
- [ ] **Dispute Resolution**: Basic dispute handling workflow
- [ ] **Reputation System**: User reputation tracking and display
- [ ] **Transaction History**: Complete transaction audit trail

#### XRPL-Specific Features
- [ ] **Escrow Automation**: Automated escrow creation and completion
- [ ] **On-chain Verification**: Transaction verification using XRPL
- [ ] **Cross-border Payments**: International transaction support
- [ ] **Low Fee Verification**: Actual transaction costs under $0.01

### 7.8 Documentation & Knowledge Transfer ✅

#### Technical Documentation
- [ ] **API Documentation**: Complete API endpoint documentation
- [ ] **Architecture Documentation**: System architecture and data flow
- [ ] **Deployment Guide**: Step-by-step deployment instructions
- [ ] **Troubleshooting Guide**: Common issues and solutions

#### User Documentation
- [ ] **User Manual**: Complete user guide for all features
- [ ] **FAQ**: Frequently asked questions and answers
- [ ] **Video Tutorials**: Key feature demonstration videos
- [ ] **Support Documentation**: Customer support procedures

---

## 🎯 Success Criteria Summary

The Swift Market PoC is considered **successfully completed** when:

1. **✅ Core Functionality**: All user journeys work end-to-end
2. **✅ XRPL Integration**: Escrow transactions work reliably on testnet
3. **✅ Security**: All security measures implemented and tested
4. **✅ Performance**: App loads quickly and responds smoothly
5. **✅ Documentation**: Complete technical and user documentation
6. **✅ Deployment**: Successfully deployed to production environment

**Expected Timeline**: 40 hours total development time
**Expected Cost**: <$100 in testing and deployment costs
**Expected Outcome**: Fully functional P2P marketplace with XRPL payments

---

## 🚀 Next Steps for Production

After PoC completion, consider these enhancements for production:

1. **Mainnet Migration**: Move from XRPL Testnet to Mainnet
2. **Advanced Features**: Wishlist, reviews, advanced search
3. **Mobile App**: Native iOS/Android applications
4. **Payment Options**: Multiple cryptocurrency support
5. **Advanced Security**: Multi-signature wallets, insurance
6. **Scalability**: Advanced caching, CDN, database optimization
7. **Compliance**: KYC/AML compliance for larger transactions
8. **Customer Support**: Live chat, dispute resolution system

**Estimated Production Timeline**: 6-12 months
**Estimated Production Budget**: $50,000-$200,000

---

*This guide provides a comprehensive roadmap for building Swift Market from concept to functional PoC. Follow each section carefully, test thoroughly, and iterate based on user feedback to create a revolutionary P2P marketplace powered by XRPL.*
