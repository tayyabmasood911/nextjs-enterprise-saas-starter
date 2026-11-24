import os
import unittest
import json

class TestNextJSSaaSIntegrity(unittest.TestCase):
    def test_readme_exists(self):
        self.assertTrue(os.path.exists("README.md"), "README.md must be present")

    def test_makefile_exists(self):
        self.assertTrue(os.path.exists("Makefile"), "Makefile must be present")

    def test_ci_workflow_exists(self):
        self.assertTrue(os.path.exists(".github/workflows/ci.yml"), "CI workflow must be present")

    def test_healthcheck_script_exists(self):
        self.assertTrue(os.path.exists("scripts/healthcheck.sh"), "Healthcheck script must be present")

    def test_environment_template_exists(self):
        self.assertTrue(os.path.exists("config/production.env.example"), "Env template must be present")

    def test_gitattributes_exists(self):
        self.assertTrue(os.path.exists(".gitattributes"), ".gitattributes must be present")

    def test_security_policy_exists(self):
        self.assertTrue(os.path.exists("SECURITY.md"), "SECURITY.md must be present")

    def test_architecture_diagram_exists(self):
        self.assertTrue(os.path.exists("docs/architecture.svg"), "docs/architecture.svg must be present")

    def test_dockerfile_configured(self):
        self.assertTrue(os.path.exists("Dockerfile"), "Dockerfile must be present")
        with open("Dockerfile", "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("node:20-alpine", content)
        self.assertIn("adduser", content)
        self.assertIn("server.js", content)

    def test_app_router_directory_structure(self):
        self.assertTrue(os.path.exists("src/app/layout.tsx"), "src/app/layout.tsx must be present")
        self.assertTrue(os.path.exists("src/app/page.tsx"), "src/app/page.tsx must be present")
        self.assertTrue(os.path.exists("src/app/dashboard/page.tsx"), "src/app/dashboard/page.tsx must be present")
        self.assertTrue(os.path.exists("src/app/api/health/route.ts"), "src/app/api/health/route.ts must be present")
        self.assertTrue(os.path.exists("src/app/api/v1/billing/route.ts"), "src/app/api/v1/billing/route.ts must be present")

    def test_tailwind_and_middleware(self):
        self.assertTrue(os.path.exists("tailwind.config.ts"), "tailwind.config.ts must be present")
        self.assertTrue(os.path.exists("middleware.ts"), "middleware.ts must be present")

if __name__ == "__main__":
    unittest.main()
