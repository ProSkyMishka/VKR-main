import SwiftUI
struct ContentView: View {
    @State private var name = "World"
    var body: some View {
        VStack {
            Text("Hello, \(name)")
            Button("Change") { name = "Swift" }
        }
    }
}
