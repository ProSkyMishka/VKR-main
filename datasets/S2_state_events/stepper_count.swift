import SwiftUI
struct ContentView: View {
    @State private var value = 0
    var body: some View {
        VStack {
            Text("\(value)")
            Stepper("Step", value: $value, in: 0...10)
        }.padding()
    }
}
