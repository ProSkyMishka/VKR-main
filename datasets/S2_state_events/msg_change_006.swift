import SwiftUI

struct ContentView: View {
    @State private var msg = "mch006-initial"

    var body: some View {
        VStack {
            Text(msg)
                .font(.headline)
            Button("mch006-change") { msg = "mch006-changed" }
        }
        .padding()
    }
}
