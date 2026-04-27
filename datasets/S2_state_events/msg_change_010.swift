import SwiftUI

struct ContentView: View {
    @State private var msg = "mch010-initial"

    var body: some View {
        VStack {
            Text(msg)
                .font(.headline)
            Button("mch010-change") { msg = "mch010-changed" }
        }
        .padding()
    }
}
