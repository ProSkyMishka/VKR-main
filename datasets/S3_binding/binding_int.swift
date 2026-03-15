import SwiftUI
struct StepperView: View {
    @Binding var n: Int
    var body: some View {
        Stepper("N", value: $n, in: 0...100)
        Text("\(n)")
    }
}
struct ContentView: View {
    @State private var n = 0
    var body: some View { StepperView(n: $n).padding() }
}
