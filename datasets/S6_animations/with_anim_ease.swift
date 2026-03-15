import SwiftUI
struct ContentView: View {
    @State private var scale: CGFloat = 1
    var body: some View {
        VStack {
            Text("Anim").scaleEffect(scale)
            Button("Animate") {
                withAnimation(.easeInOut) { scale = scale == 1 ? 1.5 : 1 }
            }
        }
    }
}
