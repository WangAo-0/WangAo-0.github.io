---
title: "Agent Harness 应该包含什么"
description: "一个可用的 agent 不只是模型调用，还需要工具、上下文、测试、观测和约束。"
pubDate: 2026-05-17
category: "ai-application"
subcategory: "AI 应用 / Harness"
tags: ["Agent", "Harness", "AI 应用"]
---

## 不只是提示词

Agent harness 可以理解为让 agent 稳定工作的外围环境。它不仅包括 prompt，还包括工具权限、文件边界、任务计划、测试验证和失败恢复。

## 最小组成

- 任务输入：用户目标、限制条件、可用资源。
- 工具层：文件系统、命令行、浏览器、API。
- 规则层：开发准则、测试要求、安全边界。
- 观测层：日志、计划、执行结果、失败原因。
- 验证层：单元测试、构建、预览和人工验收。

## 产品方向

如果把这些能力包装成产品，就不只是“一个会聊天的 agent”，而是一个能完整参与产品设计、开发、测试、上线和维护的 agent 程序员包。
