import SwiftUI

struct ContentView: View {
    @State private var offset: CGFloat = 0

    var body: some View {
        VStack {
            Text("Slide")
                .offset(x: offset)
            Button("Move") {
                withAnimation(.easeInOut) {
                    offset = offset == 0 ? 50 : 0
                }
            }
        }
    }
}
