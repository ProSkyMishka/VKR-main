import SwiftUI

struct ContentView: View {
    @State private var shown = false

    var body: some View {
        VStack {
            Button("cm013-show") { shown = true }
            if shown {
                Text("cm013-message")
                    .font(.headline)
                    .foregroundColor(.green)
            } else {
                Text("cm013-empty")
                    .foregroundColor(.gray)
            }
        }
        .padding()
    }
}
