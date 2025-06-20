const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootf63od/",
            name: "springbootf63od",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootf63od/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "福聚苑社区团购"
        } 
    }
}
export default base
