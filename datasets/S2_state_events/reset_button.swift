import SwiftUI
struct ContentView: View {
    @State private var value = 0
    var body: some View {
        VStack {
            Text("\(value)")
            Button("Reset") { value = 0 }
        }
    }
}
