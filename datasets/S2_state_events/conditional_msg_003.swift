import SwiftUI

struct ContentView: View {
    @State private var shown = false

    var body: some View {
        VStack {
            Button("cm003-show") { shown = true }
            if shown {
                Text("cm003-message")
                    .font(.headline)
                    .foregroundColor(.green)
            } else {
                Text("cm003-empty")
                    .foregroundColor(.gray)
            }
        }
        .padding()
    }
}
