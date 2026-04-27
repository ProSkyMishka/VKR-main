import SwiftUI

struct ContentView: View {
    @State private var shown = false

    var body: some View {
        VStack {
            Button("cm014-show") { shown = true }
            if shown {
                Text("cm014-message")
                    .font(.headline)
                    .foregroundColor(.green)
            } else {
                Text("cm014-empty")
                    .foregroundColor(.gray)
            }
        }
        .padding()
    }
}
