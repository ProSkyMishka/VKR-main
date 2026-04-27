import SwiftUI

struct ContentView: View {
    @State private var shown = false

    var body: some View {
        VStack {
            Button("cm012-show") { shown = true }
            if shown {
                Text("cm012-message")
                    .font(.headline)
                    .foregroundColor(.green)
            } else {
                Text("cm012-empty")
                    .foregroundColor(.gray)
            }
        }
        .padding()
    }
}
