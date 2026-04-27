import SwiftUI

struct ContentView: View {
    @State private var down = false
    var body: some View {
        VStack {
            Text("asy006-drop")
                .offset(y: down ? 60 : 0)
                .animation(.easeInOut, value: down)
            Button("asy006-fall") { down.toggle() }
        }
        .padding()
    }
}
