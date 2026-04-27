import SwiftUI

struct ContentView: View {
    @State private var msg = "mch005-initial"

    var body: some View {
        VStack {
            Text(msg)
                .font(.headline)
            Button("mch005-change") { msg = "mch005-changed" }
        }
        .padding()
    }
}
