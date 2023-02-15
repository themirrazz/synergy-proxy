// https://gitlab.com/mirrazz/studentvue-for-browsers-backend
const http = require('http');

/* Require dependencies */

const Synergy = require('./synergy');

/* Your endpoints go here */

const endpoints = {
  "/api/locator": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    Synergy.getDistrictUrls(point.body,point.params.get("parent")==='1').then(function(xml) {
      point.writeHead(200, { "Content-type": 'text/plain' })
      point.write(xml)
      point.end()
    }).catch(function(error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    });
  },
  "/api/ping": function(point) {
    point.writeHead(204);
    point.end()
  },
  "/api/student": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body);
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getStudentInfo().then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      }).catch(function(error) {
        point.writeHead(500, { "Content-type": 'text/plain' });
        point.write("500 Node Runtime Error: " + error)
        point.end()
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/childlist": function (point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getChildList().then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      }).catch(function(error) {
        point.writeHead(500, { "Content-type": 'text/plain' });
        point.write("500 Node Runtime Error: " + error)
        point.end()
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/student": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getStudentInfo(queries.get("parent")==='1'?queries.get('child'):"0").then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      }).catch(function(error) {
        point.writeHead(500, { "Content-type": 'text/plain' });
        point.write("500 Node Runtime Error: " + error)
        point.end()
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/fee": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getFeeInformation(queries.get("parent")==='1'?queries.get('child'):"0").then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      }).catch(function(error) {
        point.writeHead(500, { "Content-type": 'text/plain' });
        point.write("500 Node Runtime Error: " + error)
        point.end()
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/messages": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getMessages(queries.get("parent")==='1'?queries.get('child'):"0").then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      }).catch(function(error) {
        point.writeHead(500, { "Content-type": 'text/plain' });
        point.write("500 Node Runtime Error: " + error)
        point.end()
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/calendar": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getCalendar(queries.get("parent")==='1'?queries.get('child'):"0").then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      }).catch(function(error) {
        point.writeHead(500, { "Content-type": 'text/plain' });
        point.write("500 Node Runtime Error: " + error)
        point.end()
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/attendance": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getAttendance(queries.get("parent")==='1'?queries.get('child'):"0").then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      }).catch(function(error) {
        point.writeHead(500, { "Content-type": 'text/plain' });
        point.write("500 Node Runtime Error: " + error)
        point.end()
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/gradebook": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getGradebook(queries.get("period"),queries.get("parent")==='1'?queries.get('child'):"0").then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/classnotes": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getClassNotes(queries.get("parent")==='1'?queries.get('child'):"0").then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/school": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getSchoolInfo(queries.get("parent")==='1'?queries.get('child'):"0").then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/rmparentphoto": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.removeParentPhoto(queries.get("parentgu")).then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          console.log(error)
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/uploadparentphoto": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.uploadParentPhoto(queries.get("parentgu"),queries.get("photo")).then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/parent": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getParentAccountInfo().then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/schedule": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getSchedule(queries.get("term"),queries.get("parent")==='1'?queries.get('child'):"0").then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/reportcardlist": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.listReportCards(queries.get("parent")==='1'?queries.get('child'):"0").then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/reportcard": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getReportCard(queries.get("id"),queries.get("parent")==='1'?queries.get('child'):"0").then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/documentlist": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.listDocuments(queries.get("parent")==='1'?queries.get('child'):"0").then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/document": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getDocument(queries.get("id"),queries.get("parent")==='1'?queries.get('child'):"0").then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/getflex": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        client.getFlex().then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
  "/api/setflex": function(point) {
    if (point.method !== "POST") {
      point.writeHead(401, { "Content-type": 'text/plain' });
      point.write("401 Access Denied: Only POST requests are supported")
      return point.end();
    }
    var queries = new URLSearchParams(point.body)
    try {
      Synergy.login(queries.get("server"), queries.get("username"), queries.get("password"),queries.get("parent")==='1').then(function(client) {
        var p={
          SectionGU:queries.get("sectiongu"),
          Comments:queries.get("comments")||"",
          Date:queries.get("date"),
        }
        if(queries.get("delete")==="1") {
          p.RemoveStudentFromSection="true"
        }
        client.updateFlex(p).then(function(data) {
          point.writeHead(200, { "Content-type": 'text/plain' });
          point.write(data);
          point.end();
        }).catch(function(error) {
          point.writeHead(500, { "Content-type": 'text/plain' });
          point.write("500 Node Runtime Error: " + error)
          point.end()
        })
      })
    } catch (error) {
      point.writeHead(500, { "Content-type": 'text/plain' });
      point.write("500 Node Runtime Error: " + error)
      point.end()
    }
  },
}

/* Settings */

const _config = {
  allowCrossOrigin: true, // allow cross-origin requests
}

/* DO NOT TOUCH!! MAY BREAK SERVER! */

const host = http.createServer(_handle_connection);
/**
 * @param {http.IncomingMessage} req 
 * @param {http.ServerResponse} res 
 */
function _handle_connection(req, res) {
  var url = new URL("http://localhost" + req.url);
  if (!endpoints[url.pathname]) {
    if (_config.allowCrossOrigin) {
      res.writeHead(400, { "Content-type": 'text/plain', "Access-control-allow-origin": '*' })
    } else {
      res.writeHead(400, { "Content-type": 'text/plain' })
    }
    res.write("400 Malformed Request: No Such Endpoint")
    return res.end()
  }
  var body = ""
  req.on('data', function(chunk) {
    body += chunk
  });
  req.on('end', function() {
    var endpoint = endpoints[url.pathname];
    var control = {
      writeHead: function(status, headers) {
        if (_config.allowCrossOrigin) {
          headers["access-control-allow-origin"] = '*'
        }
        return res.writeHead(status, headers)
      },
      write: function(chunk) {
        return res.write(chunk)
      },
      headers: {
        get: function(name) {
          return req.headers[name] || null
        }
      },
      params: {
        get: function(name) {
          return url.searchParams.get(name) || null
        }
      },
      body: body,
      method: req.method,
      end: function() {
        return res.end()
      },
      responseRaw: res,
      requestRaw: req
    }
    endpoint(control)
  })
}

host.listen(80)
