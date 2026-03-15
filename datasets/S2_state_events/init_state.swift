import SwiftUI
struct ContentView: View {
    @State private var x = 5
    var body: some View {
        VStack {
            Text("Value: \(x)")
            Button("Double") { x *= 2 }
        }
    }
}
