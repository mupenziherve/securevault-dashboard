# SecureVault File Explorer

## Overview
SecureVault File Explorer is a high-performance recursive file navigation system built for SecureVault Inc. It replaces a basic list-based file interface with a modern, scalable tree explorer designed for enterprise-grade cloud storage systems.

The system allows users to efficiently navigate deeply nested folder structures, search across large datasets, and interact with files using both mouse and keyboard in a fast and accessible interface.

---

## Live Demo
https://securevault-dashboard-ten.vercel.app/

---

## Design File
Figma: https://www.figma.com/design/vqiTqi3LEMW8D5QhaJzORN/securevault-design?node-id=1-2&p=f&t=Y3X3DBSOtMHF2YdL-0

---

## Tech Stack
- Next.js
- React
- Tailwind CSS (custom component architecture, no UI libraries)

---

## Features

### Recursive File Explorer
- Fully recursive tree structure for folders and files
- Supports unlimited nesting depth
- Expand and collapse folders dynamically
- Stable rendering for deep hierarchies

---

### File Selection & Properties Panel
- Click-to-select file interaction
- Clear active selection state
- Properties panel displays:
  - File Name
  - File Type
  - File Size

---

### Keyboard Navigation
- Arrow Up / Down: Navigate visible items
- Arrow Right: Expand folders
- Arrow Left: Collapse folders
- Enter: Select file
- Fully keyboard accessible navigation

---

### Search & Filter System
- Deep search across entire nested structure
- Automatically expands parent folders of matches
- Highlights matching files for quick identification
- Improves navigation speed in large datasets

---

## Wildcard Feature (Innovation Clause)

### Smart Auto-Expand Search Navigation

## Problem
In deeply nested file systems, users must manually expand multiple folders to locate files, which slows down navigation.

## Solution
The system automatically:
- Expands all parent folders of search results
- Reveals deeply nested matches instantly
- Keeps relevant file paths visible without manual navigation

## Impact
- Reduces time spent searching for files
- Improves workflow efficiency for enterprise users
- Enhances usability in large-scale datasets

---

## Recursive Strategy

The file explorer uses a TreeNode recursive architecture:

- Each node represents a file or folder
- Folder nodes recursively render children nodes
- Expansion state is managed per node
- Supports unlimited depth structures


---

## Setup Instructions

```bash
npm install
npm run dev