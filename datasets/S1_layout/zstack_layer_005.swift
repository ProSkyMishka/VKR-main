import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(9)
                .frame(width: 125, height: 65)
            VStack(spacing: 4) {
                Text("zl005-back")
                    .font(.caption)
                Text("zl005-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
