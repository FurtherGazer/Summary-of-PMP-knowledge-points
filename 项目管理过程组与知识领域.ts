// 设定类 Chapter 对应各领域下单个过程组
// 类由以下内容组成：输入 / 工具与技术 / 输出
class Chapter {
    input: object[];
    toolsAndTechnology: object[];
    output: object[];
    
    constructor(input, toolsAndTechnology, output){
        this.input = input;
        this.toolsAndTechnology = toolsAndTechnology;
        this.output = output;
    }
}


// 定义一个 inputObject 输入对象