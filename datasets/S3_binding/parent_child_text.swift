import SwiftUI
struct InputView: View {
    @Binding var value: String
    var body: some View {
        TextField("Enter", text: $value).padding()
    }
}
struct ContentView: View {
    @State private var value = ""
    var body: some View {
        VStack {
            InputView(value: $value)
            Text("You wrote: \(value)")
        }
    }
}
