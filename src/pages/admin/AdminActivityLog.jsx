// src/pages/admin/AdminActivityLog.jsx
import React from "react";


const activityLogs = [
  {
    no: 1,
    date: "05/28/25",
    account: "animecoon@gmail.com",
    ip: "203.52.126.120",
    type: "ADMIN",
    action: "BAN ACCOUNT",
  },
  {
    no: 2,
    date: "05/28/25",
    account: "jackman01@gmail.com",
    ip: "64.59.84.01",
    type: "USER",
    action: "POST",
  },
  {
    no: 3,
    date: "05/26/25",
    account: "xwisssta@gmail.com",
    ip: "192.23.24.67",
    type: "USER",
    action: "REPORT ACCOUNT",
  },
  {
    no: 4,
    date: "05/25/25",
    account: "rex01@gmail.com",
    ip: "43.21.88.189",
    type: "USER",
    action: "LOGGED OUT",
  },
  {
    no: 5,
    date: "07/12/23",
    account: "tungtung91@gmail.com",
    ip: "98.12.241.88",
    type: "USER",
    action: "POST REPORT",
  },
  {
    no: 6,
    date: "05/15/25",
    account: "newone01@gmail.com",
    ip: "111.119.55.190",
    type: "USER",
    action: "POST UPDATE",
  },
  {
    no: 7,
    date: "05/15/25",
    account: "arrow91@gmail.com",
    ip: "192.183.350.200",
    type: "USER",
    action: "LOGGED IN",
  },
  {
    no: 8,
    date: "05/01/25",
    account: "notbro7@gmail.com",
    ip: "172.21.253.254",
    type: "USER",
    action: "PAGE UPLOAD",
  },
];

const AdminActivityLog = () => {
  return (
    <div className="w-full">
      <h2 className=" text-lg font-bold mb-4 px-2 py-1 bg-white text-black w-fit rounded">
        ACTIVITY LOG
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-white border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-left">
              <th className="py-2 px-4">NO</th>
              <th className="py-2 px-4">DATE</th>
              <th className="py-2 px-4">ACCOUNT</th>
              <th className="py-2 px-4">IP ADDRESS</th>
              <th className="py-2 px-4">TYPE</th>
              <th className="py-2 px-4">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {activityLogs.map((log) => (
              <tr key={log.no} className="border-t border-gray-700">
                <td className="py-2 px-4">{log.no}</td>
                <td className="py-2 px-4">{log.date}</td>
                <td className="py-2 px-4">{log.account}</td>
                <td className="py-2 px-4">{log.ip}</td>
                <td className="py-2 px-4">{log.type}</td>
                <td className="py-2 px-4">{log.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminActivityLog;
