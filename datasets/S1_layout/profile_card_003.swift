import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc003-name")
                    .font(.title2)
                    .bold()
                Text("pc003-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc003-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc003-posts"); Text("\(13)").bold() }
                VStack { Text("pc003-followers"); Text("\(103)").bold() }
                VStack { Text("pc003-likes"); Text("\(1003)").bold() }
            }
        }
        .padding()
    }
}
