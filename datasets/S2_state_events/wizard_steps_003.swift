import SwiftUI

struct ContentView: View {
    @State private var step = 1

    var body: some View {
        VStack(spacing: 10) {
            Text("wz003-step: \(step)").font(.headline)
            if step == 1 { Text("wz003-intro") }
            if step == 2 { Text("wz003-second") }
            if step == 3 { Text("wz003-finish") }
            HStack {
                Button("wz003-back") { if step > 1 { step -= 1 } }
                Button("wz003-next") { if step < 3 { step += 1 } }
            }
        }
        .padding()
    }
}
