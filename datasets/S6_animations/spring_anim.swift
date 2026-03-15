import SwiftUI
struct ContentView: View {
    @State private var scale: CGFloat = 1
    var body: some View {
        Text("Spring")
            .scaleEffect(scale)
            .animation(.spring(), value: scale)
        Button("Bounce") { scale = scale == 1 ? 1.3 : 1 }
    }
}
