---
适用场景:
你的操作:
检查事项:
---

# Output Format (Markdown)
An issue template for a feature request should strictly follow this format:
```markdown
---
name: ✨ 新功能 (Feature Request)
about: 提交一个新的功能需求或 PRD
title: "[Feat]: <这里简述功能>"
labels: ["enhancement", "feature"]
assignees: ""
---

## 1. 业务价值 (User Story)
<!-- 作为 [角色]，我想要 [做什么]，以便于 [解决什么痛点] -->
- **User Story**: 
- **核心目标**: 

## 2. 交互与流程 (Interaction)
<!-- 请用文字描述操作步骤，或者直接粘贴 UI 截图/手绘草图 -->
- **入口**: 
- **流程描述**:
  1. 用户点击...
  2. 系统弹出...
  3. 

## 3. 技术方案 (Tech Specs)
<!-- 前端开发视角 -->
- **组件变更**:
  - [ ] 新增 `<ComponentName />`
  - [ ] 修改 `src/components/xxx`
- **状态管理 (Pinia/Storage)**:
  - 需新增状态: `is_loading`, `user_token`
- **API / Backend**:
  - 接口: `GET /api/xxx`

## 4. 验收标准 (Checklist)
- [ ] UI 还原度检查
- [ ] 移动端适配 (如有)
- [ ] 异常处理 (断网/报错)
- [ ] 数据埋点已添加

```

An issue template for a bug report should strictly follow this format:
```markdown
---
name: 🐞 缺陷修复 (Bug Report)
about: 报告一个错误或异常 (前后端通用)
title: "[Bug]: <这里简述错误现象>"
labels: ["bug", "high-priority"]
assignees: ""
---

## 1. 问题描述 (Description)
<!-- 一句话描述发生了什么 -->

## 2. 复现证据 (Evidence / Screenshots)
<!-- ⚠️ 必须提供截图！不要只粘贴纯文本 -->
<!-- 前端：贴 UI 报错图 / 控制台红字截图 -->
<!-- 后端：贴 Postman 响应截图 / 服务器日志截图 -->
![在此上传截图]()

## 3. 复现步骤 (Steps)
1. 触发操作...
2. 
3. 

## 4. 环境上下文 (Context)
- **环境**: [Dev / Prod / Local]
- **前端信息**: (浏览器版本 / 设备型号 - 如是前端 Bug 必填)
- **后端信息**: (涉及的接口 URL / 参数 Payload - 如是后端 Bug 必填)

```

An issue template for refactoring should strictly follow this format:
```markdown
---
name: 🔨 代码重构 (Refactor)
about: 代码优化、技术升级或架构调整
title: "[Refactor]: <需要优化的模块>"
labels: ["refactor", "maintenance"]
assignees: ""
---

## 1. 现状 (Current Status)
<!-- 目前的代码/架构有什么痛点？ -->
<!-- 例如：xxxController.js 逻辑太乱；SQL 查询太慢 -->

## 2. 优化方案 (Proposal)
<!-- 你打算怎么改？ -->
- 方案：

## 3. 预期收益 (Benefits)
- [ ] 提升性能 (前端加载/后端响应)
- [ ] 提高代码可读性/可维护性
- [ ] 修复安全隐患/内存泄漏
- [ ] 数据库结构优化

## 4. 风险评估 (Risks)
<!-- 修改可能会影响哪些模块？需要重点测试哪里？ -->
- 风险：

## 5. 验收标准 (Checklist)

```