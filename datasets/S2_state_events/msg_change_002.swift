import SwiftUI

struct ContentView: View {
    @State private var msg = "mch002-initial"

    var body: some View {
        VStack {
            Text(msg)
                .font(.headline)
            Button("mch002-change") { msg = "mch002-changed" }
        }
        .padding()
    }
}
