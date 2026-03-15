import SwiftUI
struct ContentView: View {
    @State private var offset: CGFloat = 0
    var body: some View {
        VStack {
            Text("Slide").offset(x: offset).animation(.spring(), value: offset)
            Button("Move") { offset = offset == 0 ? 80 : 0 }
        }
    }
}
