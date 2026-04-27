import SwiftUI

struct ContentView: View {
    @State private var shown = false

    var body: some View {
        VStack {
            Button("cm011-show") { shown = true }
            if shown {
                Text("cm011-message")
                    .font(.headline)
                    .foregroundColor(.green)
            } else {
                Text("cm011-empty")
                    .foregroundColor(.gray)
            }
        }
        .padding()
    }
}
