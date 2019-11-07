import {getIp} from './url-setter'
export function getMonitorInfo(kind, name) {
    var prefix
    var startTimestamp = new Date().getTime() - 10 * 60 * 1000;
    var node_prefix = "http://"+getIp()+":31000/d-solo/JABGX_-mz/cluster-monitoring-for-kubernetes?orgId=1&var-interval=%24__auto_interval_interval&var-datasource=default&var-Node="+ name +"&from="+startTimestamp+"&to="+new Date().getTime()+"&panelId="
    var pod_prefix = "http://"+getIp()+":31000/d-solo/JABGX_-mz/cluster-monitoring-for-kubernetes?orgId=1&var-interval=%24__auto_interval_interval&var-datasource=default&var-Node=All&var-Pod=" + name +"&from="+startTimestamp+"&to="+new Date().getTime()+"&panelId="
    if(kind == "Node") {
        prefix = node_prefix
    }else if(kind == "Pod") {
        prefix = pod_prefix
    }else if(kind == "VirtualMachine") {
        prefix = pod_prefix
    }
    var monitor_rs = {
      "cpu": prefix + "17",
      "memory": prefix + "25",
      "fs": prefix + "17", 
      "network":prefix + "17",
    }
    return monitor_rs     
  }

  export function handleSuccess() {
    this.$notify({
      title: "Success",
      message: "操作成功",
      type: "success",
      duration: 2000
    })
  }

  export function getGrafanaLink() {
    var startTimestamp = new Date().getTime() - 12 * 60 * 1000;
    return 'http://'+getIp()+':31000/d/JABGX_-mz/cluster-monitoring-for-kubernetes?orgId=1&from='+startTimestamp+'&to='+ new Date().getTime()
  }