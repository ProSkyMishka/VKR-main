import SwiftUI

struct ContentView: View {
    @State private var msg = "mch014-initial"

    var body: some View {
        VStack {
            Text(msg)
                .font(.headline)
            Button("mch014-change") { msg = "mch014-changed" }
        }
        .padding()
    }
}
