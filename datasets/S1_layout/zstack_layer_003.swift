import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(7)
                .frame(width: 123, height: 63)
            VStack(spacing: 4) {
                Text("zl003-back")
                    .font(.caption)
                Text("zl003-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
