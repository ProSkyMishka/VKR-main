import SwiftUI
struct ContentView: View {
    @State private var down: CGFloat = 0
    var body: some View {
        Text("Drop").offset(y: down).animation(.easeInOut, value: down)
        Button("Drop") { down = 50 }
    }
}
