# SecureVault File Explorer

## Overview
A high-performance recursive file explorer built for SecureVault Inc. to navigate deeply nested file systems with search, selection, and keyboard navigation support.



## Tech Stack
- Next.js
- React
- Tailwind CSS



## Features

### 1. Recursive File Explorer
- Supports unlimited nesting
- Folder expand/collapse

### 2. File Selection
- Displays file metadata
- Clear selection state

### 3. Keyboard Navigation
- Arrow keys for navigation
- Enter to select files
- Left/Right to collapse/expand folders

### 4. Search System
- Deep tree search
- Auto-expands matching folders
- Highlights results

### 5. Wildcard Feature
- Search system improves navigation efficiency in deeply nested structures by automatically expanding relevant paths and highlighting matches.

---

## Recursive Strategy
The file explorer uses a recursive TreeNode component. Each node renders itself and its children, allowing the UI to support unlimited nesting depth.


## Setup Instructions
```bash
npm install
npm run dev