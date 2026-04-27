import SwiftUI

struct ContentView: View {
    @State private var step = 1

    var body: some View {
        VStack(spacing: 10) {
            Text("wz004-step: \(step)").font(.headline)
            if step == 1 { Text("wz004-intro") }
            if step == 2 { Text("wz004-second") }
            if step == 3 { Text("wz004-finish") }
            HStack {
                Button("wz004-back") { if step > 1 { step -= 1 } }
                Button("wz004-next") { if step < 3 { step += 1 } }
            }
        }
        .padding()
    }
}
