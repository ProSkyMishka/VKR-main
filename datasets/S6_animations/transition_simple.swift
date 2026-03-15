import SwiftUI

struct ContentView: View {
    @State private var visible = true

    var body: some View {
        VStack {
            if visible {
                Text("Hello")
                    .transition(.opacity)
            }
            Button("Toggle") {
                withAnimation {
                    visible.toggle()
                }
            }
        }
    }
}
