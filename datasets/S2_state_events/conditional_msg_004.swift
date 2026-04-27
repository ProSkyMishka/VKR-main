import SwiftUI

struct ContentView: View {
    @State private var shown = false

    var body: some View {
        VStack {
            Button("cm004-show") { shown = true }
            if shown {
                Text("cm004-message")
                    .font(.headline)
                    .foregroundColor(.green)
            } else {
                Text("cm004-empty")
                    .foregroundColor(.gray)
            }
        }
        .padding()
    }
}
