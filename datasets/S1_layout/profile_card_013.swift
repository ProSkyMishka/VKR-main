import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc013-name")
                    .font(.title2)
                    .bold()
                Text("pc013-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc013-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc013-posts"); Text("\(23)").bold() }
                VStack { Text("pc013-followers"); Text("\(113)").bold() }
                VStack { Text("pc013-likes"); Text("\(1013)").bold() }
            }
        }
        .padding()
    }
}
