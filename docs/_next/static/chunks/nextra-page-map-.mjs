import meta from "../../../pages/_meta.jsx";
import guide_meta from "../../../pages/guide/_meta.jsx";
export const pageMap = [{
  data: meta
}, {
  name: "guide",
  route: "/guide",
  children: [{
    data: guide_meta
  }, {
    name: "ai-assistant",
    route: "/guide/ai-assistant",
    frontMatter: {
      "sidebarTitle": "Ai Assistant"
    }
  }, {
    name: "certificates",
    route: "/guide/certificates",
    frontMatter: {
      "sidebarTitle": "Certificates"
    }
  }, {
    name: "grpc",
    route: "/guide/grpc",
    frontMatter: {
      "sidebarTitle": "Grpc"
    }
  }, {
    name: "index",
    route: "/guide",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "inheritance",
    route: "/guide/inheritance",
    frontMatter: {
      "sidebarTitle": "Inheritance"
    }
  }, {
    name: "kafka",
    route: "/guide/kafka",
    frontMatter: {
      "sidebarTitle": "Kafka"
    }
  }, {
    name: "library-runner",
    route: "/guide/library-runner",
    frontMatter: {
      "sidebarTitle": "Library Runner"
    }
  }, {
    name: "load-testing",
    route: "/guide/load-testing",
    frontMatter: {
      "sidebarTitle": "Load Testing"
    }
  }, {
    name: "mocking",
    route: "/guide/mocking",
    frontMatter: {
      "sidebarTitle": "Mocking"
    }
  }, {
    name: "rules",
    route: "/guide/rules",
    frontMatter: {
      "sidebarTitle": "Rules"
    }
  }, {
    name: "soap",
    route: "/guide/soap",
    frontMatter: {
      "sidebarTitle": "Soap"
    }
  }, {
    name: "stash-and-realms",
    route: "/guide/stash-and-realms",
    frontMatter: {
      "sidebarTitle": "Stash and Realms"
    }
  }, {
    name: "vault-backup",
    route: "/guide/vault-backup",
    frontMatter: {
      "sidebarTitle": "Vault Backup"
    }
  }, {
    name: "workbench",
    route: "/guide/workbench",
    frontMatter: {
      "sidebarTitle": "Workbench"
    }
  }]
}];