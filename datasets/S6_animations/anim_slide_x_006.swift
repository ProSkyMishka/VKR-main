import SwiftUI

struct ContentView: View {
    @State private var moved = false
    var body: some View {
        VStack {
            Text("asx006-slide")
                .offset(x: moved ? 80 : 0)
                .animation(.easeInOut, value: moved)
            Button("asx006-move") { moved.toggle() }
        }
        .padding()
    }
}
