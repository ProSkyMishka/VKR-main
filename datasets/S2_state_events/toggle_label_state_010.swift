import SwiftUI

struct ContentView: View {
    @State private var on = false

    var body: some View {
        VStack(spacing: 10) {
            Toggle("tl010-switch", isOn: $on)
                .padding(.horizontal)
            Text(on ? "tl010-on" : "tl010-off")
                .font(.headline)
                .foregroundColor(on ? .green : .gray)
        }
        .padding()
    }
}
