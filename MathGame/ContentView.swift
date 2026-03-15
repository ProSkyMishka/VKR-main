
import SwiftUI

struct ContentView: View
{
    @State private var correctAnswer = 0
    @State private var firstNumber = 0
    @State private var secondNumber = 0
    @State private var score = 0
    @State private var choiceArray: [Int] = []
    @State private var operators: [String] = ["+", "-", "*", "/", "√"]
    @State private var operatorIndex = 0
    
    private var difficulty = 100
    private var optionCount = 4
    private var victoryScore = 15
    
    init(_ difficulty: Int, _ optionCount: Int, _ victoryScore: Int) {
        self.difficulty = difficulty
        self.optionCount = optionCount
        self.victoryScore = victoryScore
        operatorIndex = Int.random(in: 0...4)
    }
    
    var body: some View {
        let title: String = {
            if operatorIndex != 4 {
                return "\(firstNumber) \(operators[operatorIndex]) \(secondNumber)"
            }
            else {
                return "\(operators[operatorIndex])\(firstNumber)"
            }
        }()
        
        let optionsInRow = optionCount % 3 == 0 ? 3 : 2
        
        let spacingBetweenOptions = optionCount % 3 == 0 ? -10.0 : 25.0
        
        let rows = stride(from: 0, to: choiceArray.count, by: optionsInRow).map { index -> [Int] in
            let endIndex = min(index + optionsInRow, choiceArray.count)
            return Array(choiceArray[index..<endIndex])
        }
        
        VStack {
            Text(title)
                .font(.largeTitle)
                .bold()
            
            VStack(spacing: 20) {
                ForEach(0..<rows.count, id: \.self) { rowIndex in
                    HStack(spacing: spacingBetweenOptions) {
                        if rows[rowIndex].count == 1 {
                            Spacer()
                            Button {
                                answerIsCorrect(answer: rows[rowIndex][0])
                                generateAnswers()
                            } label: {
                                AnswerButton(number: rows[rowIndex][0])
                            }
                            Spacer()
                        }
                        else {
                            ForEach(rows[rowIndex], id: \.self) { number in
                                Button {
                                    answerIsCorrect(answer: number)
                                    generateAnswers()
                                } label: {
                                    AnswerButton(number: number)
                                }
                            }
                        }
                    }
                }
            }
            .padding(.horizontal, 40)
            Text("Score: \(score)")
                .font(.headline)
                .bold()
            
        }.onAppear(perform: generateAnswers)
        
        
    }
    
    @Environment(\.presentationMode) var presentationMode
    func answerIsCorrect(answer: Int) {
        let isCorrect = answer == correctAnswer ? true : false
        if isCorrect {
            self.score += 1
        }
        else {
            if(self.score != 0){
                self.score -= 1
            }
        }
        
        if score == victoryScore{
            presentationMode.wrappedValue.dismiss()
        }
    }
    
    func generateAnswers() {
        operatorIndex = Int.random(in: 0...4)
        switch operators[operatorIndex] {
        case "+":
            correctAnswer = addition()
        case "-":
            correctAnswer = subtraction()
        case "*":
            correctAnswer = multiplication()
        case "/":
            correctAnswer = division()
        case "√":
            correctAnswer = squareRoot()
        default:
            break
        }
        
        var answerList: [Int] = []
        
        while answerList.count < optionCount - 1 {
            let randomAnswer = Int.random(in: 0...difficulty)
            
            if !answerList.contains(randomAnswer) && randomAnswer != correctAnswer {
                answerList.append(randomAnswer)
            }
        }
        
        answerList.append(correctAnswer)
        choiceArray = answerList.shuffled()
    }
    
    func addition() -> Int {
        firstNumber = Int.random(in: 0...difficulty / 2)
        secondNumber = Int.random(in: 0...difficulty / 2)
        return firstNumber + secondNumber
    }

    func subtraction() -> Int {
        firstNumber = Int.random(in: 0...difficulty)
        secondNumber = Int.random(in: 0...firstNumber)
        return firstNumber - secondNumber
    }

    func multiplication() -> Int {
        firstNumber = Int.random(in: 1...(difficulty / 2))
        let maxSecond = difficulty / firstNumber
        secondNumber = Int.random(in: 1...maxSecond)
        return firstNumber * secondNumber
    }
    
    func division() -> Int {
        secondNumber = Int.random(in: 1...(difficulty / 10))
        let quotient = Int.random(in: 1...10)
        firstNumber = secondNumber * quotient
        return quotient
    }
    
    func squareRoot() -> Int {
        let root = Int.random(in: 1...Int(sqrt(Double(difficulty))))
        firstNumber = root * root
        secondNumber = 0
        return Int(sqrt((Double(firstNumber))))
    }
}

struct AnswerButton: View {
    var number : Int
    
    var body: some View {
        Text("\(number)")
            .frame(width: 110, height: 110)
            .font(.system(size: 40, weight: .bold))
            .foregroundColor(Color.white)
            .background(Color.blue)
            .clipShape(Circle())
            .padding()
    }
}

@main
struct MathGameApp: App
{
    var body: some Scene {
        WindowGroup {
            SettingView()
        }
    }
}

struct SettingView: View
{
    @State private var difficulty: Double = 20
    @State private var optionsCount: Int = 4
    @State private var victoryScore: Int = 10
    
    var body: some View
    {
        NavigationView
        {
            VStack(spacing: 40)
            {
                Text("Settings")
                    .font(.system(size: 35, weight: .bold))
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(Color.white)
                    .cornerRadius(15)
                    .padding(.top, 200)
                    .shadow(radius: 5)
                
                
                HStack(spacing: 75)
                {
                    Text("Difficulty: \(Int(difficulty))")
                        .frame(width: 180, alignment: .leading)
                        .font(.system(size: 25, weight: .medium))
                    Slider(value: $difficulty, in: 20...1000)
                        .onChange(of: difficulty) { newValue in
                            difficulty = round(newValue / 10) * 10
                        }
                    
                }
                
                Stepper(value: $optionsCount, in: 4...9){
                    Text("Options count: \(optionsCount)")
                        .frame(width: 200, alignment: .leading)
                        .font(.system(size: 25, weight: .medium))
                        .scaleEffect(1 / 1.2)
                }
                .scaleEffect(1.2)
                .padding(.leading, 12)
                .padding(.trailing, 35)
                .padding(.top, -10)
                
                Stepper(value: $victoryScore, in: 10...30){
                    Text("Victory score: \(victoryScore)")
                        .frame(width: 200, alignment: .leading)
                        .font(.system(size: 25, weight: .medium))
                        .scaleEffect(1 / 1.2)
                }
                .scaleEffect(1.2)
                .padding(.leading, 12)
                .padding(.trailing, 35)
                .padding(.top, -10)
                
                
                NavigationLink(
                    destination: ContentView(Int(difficulty), optionsCount, victoryScore),
                    label: {
                        Text("Start the game")
                            .font(.system(size: 28, weight: .bold))
                            .padding()
                            .frame(width: 260)
                            .background(Color.green)
                            .foregroundColor(.white)
                            .cornerRadius(15)
                            .shadow(radius: 5)
                    }
                )
                
            }
            .frame(maxHeight: .infinity, alignment: .top)
            .padding()
        }
    }
}
