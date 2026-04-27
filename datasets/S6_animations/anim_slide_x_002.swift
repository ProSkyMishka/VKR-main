import SwiftUI

struct ContentView: View {
    @State private var moved = false
    var body: some View {
        VStack {
            Text("asx002-slide")
                .offset(x: moved ? 80 : 0)
                .animation(.easeInOut, value: moved)
            Button("asx002-move") { moved.toggle() }
        }
        .padding()
    }
}
