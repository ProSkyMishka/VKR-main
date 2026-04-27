import SwiftUI

struct ContentView: View {
    @State private var shown = false

    var body: some View {
        VStack {
            Button("cm008-show") { shown = true }
            if shown {
                Text("cm008-message")
                    .font(.headline)
                    .foregroundColor(.green)
            } else {
                Text("cm008-empty")
                    .foregroundColor(.gray)
            }
        }
        .padding()
    }
}
