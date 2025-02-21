//支持monorepo的工作区配置文件
import { defineWorkspace } from "vitest/config.js";
export default defineWorkspace(['vitest.config.ts'])

//这样可以确保vitest在monorepo环境中正确使用配置文件