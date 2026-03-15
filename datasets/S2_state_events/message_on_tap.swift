import SwiftUI
struct ContentView: View {
    @State private var msg = "Tap below"
    var body: some View {
        VStack {
            Text(msg)
            Button("Say Hi") { msg = "Hi!" }
        }
    }
}
