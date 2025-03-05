const express=require('express');
const cors=require("cors");
const app = express(); // Creates Express application
const os=require("os");

app.use(cors({
    origin:"*"
}))

app.get("/", async (req, res) => { // Defines GET route for root path
  try {
    // Attempts to get private IP from network interfaces
    const privateIP = os.networkInterfaces().eth0?.[0]?.address || "Unknown Private IP";

    // Fetches public IP from AWS metadata service
    const response = await axios.get("http://169.254.169.254/latest/meta-data/public-ipv4");
    const publicIP = response.data;

    // Sends HTML response with both IPs
    res.send(`:rocket: EC2 Instance Details: <br>
              Private IP: ${privateIP} <br>
              Public IP: ${publicIP}`);
  } catch (error) {
    res.send("Error fetching EC2 instance details");
  }
});

app.listen(3001, () => { // Starts server on port 3001
  console.log("Server is running on port 3001");
});